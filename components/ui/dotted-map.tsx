import * as React from "react"
import { createMap } from "svg-dotted-map"

import { cn } from "@/lib/utils"

interface Marker {
  lat: number
  lng: number
  size?: number
  color?: string
  avatar?: string
}

export interface DottedMapProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  mapSamples?: number
  markers?: Marker[]
  dotColor?: string
  markerColor?: string
  dotRadius?: number
  stagger?: boolean
}

// Global cache to prevent recalculation of the base map during SSR/SSG across multiple pages
const mapCache = new Map<string, ReturnType<typeof createMap>>();

export function DottedMap({
  width = 150,
  height = 75,
  mapSamples = 5000,
  markers = [],
  markerColor = "#FF6900",
  dotRadius = 0.2,
  stagger = true,
  className,
  style,
}: DottedMapProps) {
  const cacheKey = `${width}-${height}-${mapSamples}`;
  
  if (!mapCache.has(cacheKey)) {
    mapCache.set(cacheKey, createMap({ width, height, mapSamples }));
  }
  
  const { points, addMarkers } = mapCache.get(cacheKey)!;

  const processedMarkers = addMarkers(markers)

  const staggerCacheKey = `${cacheKey}-${stagger}`;
  if (!mapCache.has(staggerCacheKey)) {
    const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x)
    const rowMap = new Map<number, number>()
    let step = 0
    let prevY = Number.NaN
    let prevXInRow = Number.NaN

    for (const p of sorted) {
      if (p.y !== prevY) {
        prevY = p.y
        prevXInRow = Number.NaN
        if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size)
      }
      if (!Number.isNaN(prevXInRow)) {
        const delta = p.x - prevXInRow
        if (delta > 0) step = step === 0 ? delta : Math.min(step, delta)
      }
      prevXInRow = p.x
    }
    
    // Using any internally here to just stuff it into the same cache Map
    mapCache.set(staggerCacheKey, { xStep: step || 1, yToRowIndex: rowMap } as any)
  }

  const { xStep, yToRowIndex } = mapCache.get(staggerCacheKey) as any;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-gray-500 dark:text-gray-500", className)}
      style={{ width: "100%", height: "100%", ...style }}
    >
      {points.map((point, index) => {
        const rowIndex = yToRowIndex.get(point.y) ?? 0
        const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0
        return (
          <circle
            cx={point.x + offsetX}
            cy={point.y}
            r={dotRadius}
            fill="currentColor"
            key={`${point.x}-${point.y}-${index}`}
          />
        )
      })}
      {processedMarkers.map((marker: any, index: number) => {
        const rowIndex = yToRowIndex.get(marker.y) ?? 0
        const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0
        
        if (marker.avatar) {
          return (
            <g key={`${marker.x}-${marker.y}-${index}`}>
              <defs>
                <clipPath id={`clip-${index}`}>
                   <circle cx={marker.x + offsetX} cy={marker.y} r={marker.size ?? dotRadius} />
                </clipPath>
              </defs>
              <image 
                href={marker.avatar} 
                x={(marker.x + offsetX) - (marker.size ?? dotRadius)} 
                y={marker.y - (marker.size ?? dotRadius)} 
                height={(marker.size ?? dotRadius) * 2} 
                width={(marker.size ?? dotRadius) * 2} 
                clipPath={`url(#clip-${index})`}
                preserveAspectRatio="xMidYMid slice"
              />
              <circle
                cx={marker.x + offsetX}
                cy={marker.y}
                r={marker.size ?? dotRadius}
                fill="none"
                stroke={marker.color ?? markerColor}
                strokeWidth={0.2}
              />
            </g>
          )
        }

        return (
          <circle
            cx={marker.x + offsetX}
            cy={marker.y}
            r={marker.size ?? dotRadius}
            fill={marker.color ?? markerColor}
            key={`${marker.x}-${marker.y}-${index}`}
          />
        )
      })}
    </svg>
  )
}

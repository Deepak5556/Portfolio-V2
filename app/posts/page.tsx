"use client";

import React, { useState } from "react";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { 
  History, MessageSquare, Heart, Share2, 
  Calendar, Tag, Play, Image as ImageIcon,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, posts } from "@/lib/data";
import { SectionLabel } from "@/components/Shared";
import { ClientTweetCard } from "@/components/ui/client-tweet-card";
import { format } from "date-fns";
import { PostImageGallery } from "@/components/PostImageGallery";
import { PostVideoPlayer } from "@/components/PostVideoPlayer";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostsPage() {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const totalPosts = posts.length;

  const loadMore = () => {
    setIsLoadingMore(true);
    // Artificial delay to show optimization/loading state
    setTimeout(() => {
      setVisiblePosts((prev) => Math.min(prev + 3, totalPosts));
      setIsLoadingMore(false);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-20">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 px-4 sm:px-0"
      >
        <SectionLabel>Dev Log</SectionLabel>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-2">
          Activity<span className="text-orange-500"> / </span>Posts<span className="text-orange-500">.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
          Daily updates, progress builds, and design experiments.
        </p>
      </motion.div>

      <Separator className="bg-border/40" />

      {/* Feed Section */}
      <div className="space-y-12 relative px-4 sm:px-0">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden sm:block" />

        <AnimatePresence mode="popLayout">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoadingMore && (
          <div className="space-y-8">
            {[1, 2].map(i => <PostSkeleton key={i} />)}
          </div>
        )}

        {visiblePosts < totalPosts && !isLoadingMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center pt-8"
          >
            <Button 
              variant="outline" 
              onClick={loadMore}
              className="group gap-3 rounded-2xl h-14 px-10 border-border/60 hover:border-primary/50 transition-all font-bold uppercase text-xs tracking-widest shadow-lg shadow-primary/5"
            >
              Discover More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-orange-500" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";

function PostCard({ post }: { post: any }) {
  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/40 backdrop-blur-sm rounded-[2.5rem] group hover:border-primary/30 transition-all duration-500 shadow-xl shadow-primary/5">
      <CardHeader className="p-8 pb-4">
        <Link href={`/profile/${post.username}`} className="flex flex-row items-center gap-4 group/profile">
          <Avatar className="h-12 w-12 ring-2 ring-border/50 ring-offset-2 ring-offset-background group-hover/profile:ring-orange-500 transition-all duration-500">
            <AvatarImage src={post.avatar} alt={post.username} />
            <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-tight group-hover/profile:text-orange-500 transition-colors uppercase">{post.username}</span>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-black uppercase tracking-widest">
              <Calendar size={10} className="text-orange-500" />
              {format(new Date(post.dateCreated), "MMMM dd, yyyy")}
            </div>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-8 pb-8 space-y-6">
        <p className="text-base sm:text-lg leading-relaxed font-medium text-foreground/90 whitespace-pre-wrap">
          {post.content}
        </p>

        {/* Media Section - Optimized Components */}
        <div className="space-y-4">
          {post.images && post.images.length > 0 && (
            <PostImageGallery images={post.images} />
          )}

          {post.video && (
            <PostVideoPlayer src={post.video} poster={post.poster} />
          )}

          {post.tweetId && (
            <div className="pt-2">
              <ClientTweetCard id={post.tweetId} />
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag: string) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-[10px] font-bold uppercase tracking-widest bg-orange-500/5 text-orange-600 dark:text-orange-400 border-none px-3 h-6 rounded-full"
            >
              {`#${tag}`}
            </Badge>
          ))}
        </div>
      </CardContent>

      <Separator className="bg-border/5 mx-8" />

      <CardFooter className="px-8 py-5 flex items-center justify-between text-muted-foreground/60">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2.5 hover:text-orange-500 transition-colors text-xs font-bold uppercase tracking-tighter">
            <Heart size={18} /> 24
          </button>
          <button className="flex items-center gap-2.5 hover:text-orange-500 transition-colors text-xs font-bold uppercase tracking-tighter">
            <MessageSquare size={18} /> 8
          </button>
        </div>
        <button className="hover:text-orange-500 transition-colors p-2 hover:bg-orange-500/10 rounded-full">
          <Share2 size={18} />
        </button>
      </CardFooter>
    </Card>
  );
}

function PostSkeleton() {
  return (
    <Card className="border-border/50 bg-card/20 rounded-[2.5rem] p-8 space-y-6 animate-pulse">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-48 w-full rounded-2xl" />
    </Card>
  );
}

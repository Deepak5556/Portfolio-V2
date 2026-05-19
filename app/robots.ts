import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/scratch/'],
    },
    sitemap: 'https://deepakportfolioo.web.app/sitemap.xml',
  };
}

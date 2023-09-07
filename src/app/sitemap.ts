import { getAllPostMetadata } from '@/lib/posts';
import { MetadataRoute } from 'next';

const baseUrl = ' https://mitchellcash.com';
const staticUrlPaths: string[] = ['/', '/blog', '/contact'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostMetadata = await getAllPostMetadata();
  const sitemap: MetadataRoute.Sitemap = [];
  const modified = new Date();

  for (const staticPath of staticUrlPaths) {
    sitemap.push({
      url: `${baseUrl}${staticPath}`,
      lastModified: modified
    });
  }

  for (const postMeta of allPostMetadata) {
    sitemap.push({
      url: `${baseUrl}/blog/${postMeta.slug}`,
      lastModified: new Date(postMeta.date).toISOString()
    });
  }

  return sitemap;
}

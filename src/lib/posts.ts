import matter from 'gray-matter';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

interface SlugParam {
  params: {
    slug: string;
  };
}

interface PostFrontMatter {
  title: string;
  date: string;
}

export interface PostMetadata extends PostFrontMatter {
  slug: string;
}

export interface PostContent extends PostFrontMatter {
  content: string;
}

const postsDirectory = join(process.cwd(), 'posts');

export async function getPostContent(slug: string): Promise<PostContent> {
  const fullPath = join(postsDirectory, slug + '.md');
  const fileContents = await readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    ...(matterResult.data as PostFrontMatter),
    content: matterResult.content
  };
}

export async function getPostSlugs() {
  const allFileNames = await readdir(postsDirectory);
  const markdownFileNames = allFileNames.filter((fileName) => fileName.endsWith('.md'));

  const slugs: SlugParam[] = [];
  for (const fileName of markdownFileNames) {
    const slug = fileName.replace(/\.md$/, '');
    slugs.push({
      params: {
        slug
      }
    });
  }

  return slugs;
}

export async function getAllPostMetadata() {
  const postSlugs = await getPostSlugs();

  const postData: PostMetadata[] = [];
  for (const slug of postSlugs) {
    const fullPath = join(postsDirectory, slug.params.slug + '.md');
    const fileContents = await readFile(fullPath, 'utf8');

    // Use gray-matter to parse the front-matter of the file.
    const matterResult = matter(fileContents);

    // Combine the data with the id
    postData.push({
      slug: slug.params.slug,
      ...(matterResult.data as PostFrontMatter)
    });
  }

  // Sort posts by date
  return postData.sort((a, b) => {
    if (Date.parse(a.date) < Date.parse(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

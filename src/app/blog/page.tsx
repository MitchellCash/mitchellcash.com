import BackBanner from '@/components/back-banner';
import { getAllPostMetadata } from '@/lib/posts';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function Page() {
  const recentPostData = await getAllPostMetadata();

  return (
    <Fragment>
      <BackBanner link="/" text="home" />

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Blog</h1>
          </div>
        </div>
      </div>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {recentPostData.map((post) => (
            <article key={post.slug} className="pb-6 border-b">
              <h2 className="mb-4 mt-6 text-2xl font-bold text-center">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="flex content-center justify-center text-lg text-gray-500">
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

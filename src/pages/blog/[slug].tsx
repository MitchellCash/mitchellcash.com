import BackBanner from '@/components/back-banner';
import { getPostContent, getPostSlugs, PostContent } from '@/lib/posts';
import hljs from 'highlight.js';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import 'highlight.js/styles/github-dark-dimmed.css';
import '../../app/globals.css';

interface Params {
  params: {
    slug: string;
  };
}

interface Props {
  post: PostContent;
}

export async function getStaticPaths() {
  const paths = await getPostSlugs();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: Params): Promise<{ props: Props }> {
  const post = await getPostContent(params.slug);
  return {
    props: {
      post
    }
  };
}

export default function Post({ post }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <Fragment>
      <Head>
        <title>MitchellCash.com</title>
      </Head>

      <BackBanner link="/blog" text="blog" />

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto mb-6 w-full max-w-2xl prose prose-sm sm:prose-base lg:prose-lg prose-blue dark:prose-invert">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {post.title}
            </h1>
          </div>

          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </Fragment>
  );
}

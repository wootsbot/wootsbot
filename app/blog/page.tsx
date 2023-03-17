import type { Metadata } from 'next';

import Link from 'next/link';
import { intlFormat } from 'date-fns';

import ViewCounter from '@/components/PostViewCounter';

import { allBlogs } from '@/contentlayer/generated';

export const metadata: Metadata = {
  title: 'Escribiendo',
  description:
    'Bienvenido a este lugar digital donde comparto lo que estoy aprendiendo sobre el desarrollo frontend, Experiencia del desarrollador, rust, código abierto, JS/TS, Teclados mecánicos, Máquinas de estado y mucho más.',
};

async function BlogPage() {
  return (
    <section className="antialiased px-8 max-w-[65ch] mx-auto py-10">
      <h1 className="font-black text-3xl lg:text-5xl uppercase mb-10">Escribiendo</h1>

      <p className="sm:text-xl my-4 mb-12">
        Bienvenido a este lugar digital donde comparto lo que estoy aprendiendo sobre el desarrollo frontend,
        Experiencia del desarrollador, rust, código abierto, JS/TS, Teclados mecánicos, Máquinas de estado y mucho más.
      </p>

      {/* <div className="bg-gray-500 mx-auto h-20 w-1 my-10"></div> */}

      <ul>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <li key={post.slug}>
              <div className="blog-item">
                <Link className="flex flex-col space-y-1 mb-6 blog-item-link" href={`/blog/${post.slug}`}>
                  <p className="text-m no-underline">{post.title}</p>
                  <time className="text-sm text-gray-400">
                    {intlFormat(
                      new Date(post?.publishedAt),
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      },
                      {
                        locale: 'es-MX',
                      },
                    )}
                  </time>
                  <ViewCounter slug={post.slug} />
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BlogPage;

import type { Metadata } from 'next';
import Image from 'next/image';

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
    <section>
      <h1 className="font-black text-3xl lg:text-5xl uppercase mb-10">Escribiendo</h1>

      <p className="sm:text-xl my-4 mb-12">
        Bienvenido a este lugar digital donde comparto lo que estoy aprendiendo sobre el desarrollo frontend,
        Experiencia del desarrollador, rust, código abierto, JS/TS, Teclados mecánicos, Máquinas de estado y mucho más.
      </p>

      <ul className="mb-16 flex flex-col space-y-16">
        {allBlogs
          .filter((b) => b.publish)
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <li key={post.slug}>
              <article className="blog-item">
                <Link className="flex flex-col space-y-1 mb-6 blog-item-link" href={`/blog/${post.slug}`}>
                  <div className="flex flex-row items-center space-x-4 mb-3">
                    <time className="text-md text-gray-400">
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
                  </div>

                  <div className="grid grid-cols-12 gap-8">
                    <Image
                      className="rounded-lg col-span-5"
                      alt={post.title}
                      src={post?.image as string}
                      width={600}
                      height={400}
                      quality={75}
                    />

                    <div className="col-span-7">
                      <h2 className="text-lg no-underline mb-3">{post.title}</h2>
                      <p className="text-gray-400">{post.summary}</p>
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default BlogPage;

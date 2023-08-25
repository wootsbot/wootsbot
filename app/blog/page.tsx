import type { Metadata } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import { intlFormat } from 'date-fns';

import ViewCounter from '@/components/PostViewCounter';
import HeaderPage from '@/components/headerPage';

import { allBlogs } from '@/contentlayer/generated';

export const metadata: Metadata = {
  title: 'Escribiendo',
  description:
    'Bienvenido a este lugar digital donde comparto lo que estoy aprendiendo sobre el desarrollo frontend, Experiencia del desarrollador, rust, código abierto, JS/TS, Teclados mecánicos, Máquinas de estado y mucho más.',
};

const FORMAT_LOCALE_ES_MX = 'es-MX' as const;

async function BlogPage() {
  const blogsList = allBlogs
    .filter((b) => b.publish)
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    });

  return (
    <section>
      <HeaderPage
        title="Escribiendo"
        // summary="Bienvenido a este lugar digital donde comparto lo que estoy aprendiendo sobre el desarrollo frontend,
        //   Experiencia del desarrollador, rust, código abierto, JS/TS, Teclados mecánicos, Máquinas de estado y mucho
        //   más."
      />

      <div>
        {blogsList.map((post, index) => {
          if (index === 0) {
            return (
              <article className="blog-item mb-32">
                <Link className="flex flex-col space-y-1 mb-6 blog-item-link" href={`/blog/${post.slug}`}>
                  <div className="flex flex-row items-center justify-between mb-3">
                    <time className="text-sm text-neutral-500">
                      {intlFormat(
                        new Date(post?.publishedAt),
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        },
                        {
                          locale: FORMAT_LOCALE_ES_MX,
                        },
                      )}
                    </time>

                    <ViewCounter slug={post.slug} />
                  </div>

                  <div className="flex flex-col space-y-8">
                    <Image
                      className="rounded-lg"
                      alt={post.title}
                      src={post?.image as string}
                      width={576}
                      height={400}
                      quality={75}
                    />

                    <div>
                      <h2 className="text-md no-underline mb-1 text-black dark:text-white">{post.title}</h2>
                      <p className="text-sm">{post.summary}</p>
                    </div>
                  </div>
                </Link>
              </article>
            );
          }

          return (
            <ul className="mb-16 flex flex-col space-y-16">
              <li key={post.slug}>
                <article className="blog-item">
                  <Link className="flex flex-col space-y-1 mb-6 blog-item-link" href={`/blog/${post.slug}`}>
                    <div className="flex flex-row items-center space-x-4 mb-3">
                      <time className="text-sm text-black dark:text-white/80">
                        {intlFormat(
                          new Date(post?.publishedAt),
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                          {
                            locale: FORMAT_LOCALE_ES_MX,
                          },
                        )}
                      </time>
                      <ViewCounter slug={post.slug} />
                    </div>

                    <div className="grid grid-cols-12 sm:gap-8 gap-0 sm:space-y-0 space-y-8">
                      <Image
                        className="rounded-lg col-span-12 sm:col-span-5"
                        alt={post.title}
                        src={post?.image as string}
                        width={600}
                        height={400}
                        quality={75}
                      />

                      <div className="col-span-12 sm:col-span-7">
                        <h2 className="text-md no-underline mb-1 text-black dark:text-white">{post.title}</h2>
                        <p className="text-sm">{post.summary}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default BlogPage;

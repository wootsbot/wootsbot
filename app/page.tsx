import Image from 'next/image';
import Link from 'next/link';

import { intlFormat, differenceInMinutes } from 'date-fns';

import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';

import { allBlogs } from '@/contentlayer/generated';

import ViewCounter from '@/components/PostViewCounter';

import Projects from './projects';
import Social from './social';

const FORMAT_LOCALE_ES_MX = 'es-MX' as const;
const START_WORK_DEVELOPER = new Date('2016-10-02');

const difference = differenceInMinutes(new Date(), START_WORK_DEVELOPER);
const nowInMexicoTimezone = new Intl.NumberFormat(FORMAT_LOCALE_ES_MX).format(difference);

export default async function HomePage() {
  return (
    <div>
      <section className="flex flex-col justify-center mb-32">
        <div>
          <div className="text-lg grid gap-12">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full h-12"
                src="/avatar.jpg"
                alt="avatar wootsbot"
                width={48}
                height={48}
                quality={100}
              />
              <div className="flex gap-1 flex-col">
                <h1 className="text-xl">Jorge</h1>
                <p>{`${nowInMexicoTimezone} minutos como desarrollador.`}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-2xl font-extralight">
                Arquitecto Frontend + Developer Experience + Entusiasta del código abierto + JS/TS + Teclados mecánicos
                + Máquinas de estado + aprendiendo Rust. Un fotógrafo apasionado y Constructor de cosas
              </p>

              <p className="text-2xl font-extralight">
                En mi tiempo libre, enseño a estudiantes de secundaria de las zonas rurales de Guerrero los conceptos
                básicos de programación.
              </p>
            </div>
          </div>

          <Social />
        </div>
      </section>

      <section className="mb-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg">Escribiendo.</h2>

          <Link
            aria-label="Link to Articulos"
            className="cursor-pointer flex items-center gap-2"
            rel="noopener noreferrer"
            href="/blog"
          >
            <span className="text-base font-normal">Ver todos</span>
            <ArrowRightIcon className="w-5" />
          </Link>
        </div>

        <ul className="mb-16 flex flex-col space-y-10">
          {allBlogs
            .filter((b) => b.publish)
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            ?.slice(0, 3)
            .map((post) => (
              <div className="" key={post.slug}>
                <div className="h-px bg-white/20 w-full mb-4" />
                <li className="flex flex-col items-start gap-3">
                  <article className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-4 mb-3">
                      <time className="text-md">
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

                    <div className="grid grid-cols-12 sm:gap-8 gap-0 sm:space-x-0 space-y-8">
                      <Image
                        className="rounded-lg col-span-12 sm:col-span-5"
                        alt={post.title}
                        src={post?.image as string}
                        width={576}
                        height={400}
                        quality={75}
                      />

                      <div className="col-span-12 sm:col-span-7">
                        <h2 className="text-md no-underline mb-3">{post.title}</h2>
                        <p className="text-sm">{post.summary}</p>
                      </div>
                    </div>
                  </article>

                  <Link
                    href={`/blog/${post.slug}`}
                    rel="noreferrer"
                    className="flex flex-row items-center px-3 py-1 mt-4 text-sm border-2 border-white rounded-full gap-x-1"
                  >
                    <p className="sm:max-w-md max-w-[200px] truncate text-clip">Leer más sobre {post.title}</p>{' '}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-external-link inline ml-1 w-4 h-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg> */}
                  </Link>
                </li>
              </div>
            ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-lg">Open-Source.</h2>
            <p>"Haciendo esto y aquello"</p>
          </div>
        </div>

        <Projects />
      </section>
    </div>
  );
}

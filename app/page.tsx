import Image from 'next/image';
import Link from 'next/link';

import { intlFormat, differenceInMinutes } from 'date-fns';

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
          <div className="text-lg grid gap-4">
            <h1 className="text-5xl mb-2 font-medium">Hola 👋, Soy Jorge</h1>

            <p>{`Desarrollador con ${nowInMexicoTimezone} minutos.`}</p>

            <p className="py-2">
              Arquitecto Front-End + Developer Experience en {` `}
              <b className="text-yellow-400">Digital@FEMSA</b> - <b className="text-green-400">Spin By Oxxo</b>.
              Entusiasta del código abierto + JS/TS + Teclados mecánicos + Máquinas de estado + aprendiendo Rust.
            </p>

            <p>
              {' '}
              Un fotógrafo apasionado, coautor de{` `}
              <Link
                className="underline"
                target="_blank"
                href="https://www.reactnextboilerplate.com/"
                rel="noopener noreferrer"
              >
                React Next Boilerplate
              </Link>
              {` `} y Constructor de cosas.
            </p>

            <p>
              En mi tiempo libre, enseño a estudiantes de secundaria de las zonas rurales de Guerrero los conceptos
              básicos de programación.
            </p>
          </div>

          <Social />
        </div>
      </section>

      <section className="mb-32">
        <div className="flex flex-col space-y-4 mb-16">
          <h2 className="text-2xl">Mis divagaciones.</h2>
          <p className="text-gray-400">¡Oye, quiero que sepas que a veces escribo!</p>
        </div>

        <ul className="mb-16 flex flex-col space-y-16">
          {allBlogs
            .filter((b) => b.publish)
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })?.slice(0, 3)
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
                            locale: FORMAT_LOCALE_ES_MX,
                          },
                        )}
                      </time>
                      <ViewCounter slug={post.slug} />
                    </div>

                    <div className="grid grid-cols-12 gap-8">
                      <Image
                        className="rounded-lg col-span-12 sm:col-span-5"
                        alt={post.title}
                        src={post?.image as string}
                        width={600}
                        height={400}
                        quality={75}
                      />

                      <div className="col-span-12 sm:col-span-7">
                        <h2 className="text-lg no-underline mb-3">{post.title}</h2>
                        <p className="text-gray-400">{post.summary}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
        </ul>

        <Link
          aria-label="Link to Articulos"
          className="cursor-pointer bg-zinc-900 rounded-md border border-zinc-800 py-2 px-4 flex flx-row items-center justify-center"
          rel="noopener noreferrer"
          href="/blog"
        >
          <span className="text-base font-normal">Ver todos mis articulos</span>
        </Link>
      </section>

      <section>
        <div className="flex flex-col space-y-4 mb-16">
          <h2 className="text-2xl">Open-Source.</h2>
          <p className="text-gray-400">"Haciendo esto y aquello"</p>
          <p className="text-gray-400">Creo que "entre más compartas, más aprendes".</p>
        </div>

        <Projects />
      </section>
    </div>
  );
}

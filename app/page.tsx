import Link from 'next/link';

import { differenceInMinutes, intlFormat } from 'date-fns';

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
      <section className='flex flex-col justify-center mb-16'>
        <div>
          <div className='grid gap-12'>
            <div className='flex items-center gap-4'>
              <img
                className='inline-block h-12 w-12 rounded-full object-cover'
                width={48}
                height={48}
                src='/avatar.jpg'
                srcSet='/avatar.jpg'
                alt='Avatar of face wootsbot'
                decoding='async'
                data-nimg='1'
                title='avatar wootsbot'
                loading='lazy'
              />

              <div className='flex gap-1 flex-col'>
                <h1 className='text-xl text-black dark:text-white'>hola, soy Jorge</h1>
                <p className='font-extralight'>
                  <time className='text-lg font-thin text-yellow-800 dark:text-yellow-100'>{nowInMexicoTimezone}</time>{' '}
                  minutos como desarrollador.
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <p className='text-xl font-extralight'>
                Soy desarrollador frontend, constructor de cosas y un fotógrafo apasionado. Actualmente trabajo como
                Líder técnico en{' '}
                <a
                  className='text-blue-300 dark:text-blue-400 underline decoration-1 font-medium'
                  href='https://dd360.mx/'
                >
                  DD360
                </a>{' '}
                .
              </p>

              <p className='text-xl font-extralight'>
                En mi tiempo libre, enseño a estudiantes de secundaria de las zonas rurales de Guerrero los conceptos
                básicos de programación. Entusiasta del código abierto + Developer Experience + JS/TS + Teclados
                mecánicos + Máquinas de estado + aprendiendo Rust.
              </p>
            </div>
          </div>

          <Social />
        </div>
      </section>

      <section className='mb-16'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-lg text-black dark:text-white'>Escribiendo.</h2>

          <Link
            aria-label='Link to Articulos'
            className='cursor-pointer flex items-center gap-2'
            rel='noopener noreferrer'
            href='/blog'
          >
            <span className='text-base font-normal'>Ver todos</span>
            <ArrowRightIcon className='w-5' />
          </Link>
        </div>

        <ul className='mb-16 flex flex-col space-y-10'>
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
              <li key={post.slug} className='flex flex-col items-start gap-3'>
                <Link href={`/blog/${post.slug}`}>
                  <article className='flex flex-col space-y-1'>
                    <h2 className='text-md no-underline text-black dark:text-white'>{post.title}</h2>
                    <p className='text-sm'>{post.summary}</p>

                    <div className='flex flex-row items-center space-x-4'>
                      <time className='text-sm'>
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
                  </article>
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section>
        <div className='flex items-center justify-between mb-10'>
          <div>
            <h2 className='text-lg text-black dark:text-white'>Open-Source.</h2>
            <p className='font-extralight'>"Haciendo esto y aquello"</p>
          </div>
        </div>

        <Projects />
      </section>
    </div>
  );
}

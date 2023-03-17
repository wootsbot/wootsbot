import Image from 'next/image';
import Link from 'next/link';

import { intlFormat } from 'date-fns';

import { allBlogs } from '@/contentlayer/generated';

import ViewCounter from '@/components/PostViewCounter';

import AvatarMe from '../public/static/images/yoV2.jpg';

export default async function HomePage() {
  return (
    <section className="antialiased px-8 max-w-[65ch] mx-auto">
      <div className="flex justify-center py-10">
        <Image
          alt="wootsbot"
          className="rounded-full border-8 border-yellow-500/100"
          src={AvatarMe}
          placeholder="blur"
          width={150}
          priority
        />
      </div>

      <div className="text-lg grid gap-4">
        <h1 className="text-2xl mb-2 font-bold">Hola 👋, soy Jorge.</h1>
        {/* <h2>"Haciendo esto y aquello"</h2> */}
        <p className="py-2">
          Arquitecto Front-End + Developer Experience at {` `}
          <b className="text-yellow-300">Digital@FEMSA</b> - <b className="text-violet-300">Spin By Oxxo</b>. Entusiasta
          del código abierto + JS/TS + Teclados mecánicos + Máquinas de estado + aprendiendo Rust.
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
          En mi tiempo libre, ayudo a enseñar a los estudiantes de secundaria de las zonas rurales de Guerrero los
          conceptos básicos de la programación.
        </p>
      </div>

      <div className="mt-11">
        <h2 className="mb-10 text-2xl">Escribiendo</h2>

        <ul>
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
                    {/* 
                    <div className="flex flex-row items-center">
                      {post?.tags?.split(',')?.map((tag) => (
                        <span key={tag} className="text-sm no-underline mr-1">
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="border rounded-xl p-10 lg:-mx-10 relative my-10">
        <h2 className="text-xl font-body capitalize mb-4">"Haciendo esto y aquello"</h2>
        <h3 className="text-xl text-red-400 mb-10">Creo que "entre más compartas, más aprendes".</h3>

        <div className="grid md:grid-cols-2 gap-4 text-brand-charcoal">
          <article className="bg-pink-500 rounded-lg p-6 grid grid-rows-[auto_1fr_auto]">
            <h4 className="font-semibold mb-4">X-boilerplate</h4>
            <p className="mb-4">
              🪂 X-boilerplate un "boilerplate" con configuración y mejores prácticas para sus proyectos de Nextjs, para
              que solo pueda concentrarse en crear su producto
            </p>
            <Link
              href="https://github.com/wootsbot/X-boilerplate"
              target="_blank"
              className="px-4 py-3 bg-green-500 text-brand-charcoal text-center rounded-full uppercase text-sm border border-black cursor-pointer"
            >
              <span className="text-black">Ver proyecto</span>
            </Link>
          </article>

          <article className="bg-blue-500 rounded-lg p-6 grid grid-rows-[auto_1fr_auto]">
            <h4 className="font-semibold mb-4">react-simple-icons</h4>
            <p className="mb-4">
              📦 Este paquete proporciona los Simple Icons empaquetados como un conjunto de componentes de React.
            </p>
            <Link
              href="https://github.com/icons-pack/react-simple-icons"
              target="_blank"
              className="px-4 py-3 bg-red-500 text-brand-charcoal text-center rounded-full uppercase text-sm border border-black cursor-pointer"
            >
              <span className="text-black">Ver proyecto</span>
            </Link>
          </article>

          <article className="bg-purple-500 rounded-lg p-6 grid grid-rows-[auto_1fr_auto]">
            <h4 className="font-semibold mb-4">react-simple-icons</h4>
            <p className="mb-4">
              🚀 "boilerplate" para reducir la configuración de tus proyectos con nextJS, mejores prácticas de
              desarrollo y bibliotecas populares en la comunidad de desarrolladores.
            </p>
            <Link
              href="https://github.com/react-next-boilerplate/react-next-boilerplate"
              target="_blank"
              className="px-4 py-3 bg-yellow-500 text-brand-charcoal text-center rounded-full uppercase text-sm border border-black cursor-pointer"
            >
              <span className="text-black">Ver proyecto</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

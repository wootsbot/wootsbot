import Link from 'next/link';

function Projects() {
  return (
    <section>
      <div className="grid md:grid-cols-1 gap-10 text-brand-charcoal">
        <article className="rounded-lg border border-gray-800 p-4 grid grid-rows-[auto_1fr_auto]">
          <div className="flex flex-col items-start">
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
          </div>
        </article>

        <article className="rounded-lg border border-gray-800 p-4 grid grid-rows-[auto_1fr_auto]">
          <div className="flex flex-col items-start">
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
          </div>
        </article>

        <article className="rounded-lg border border-gray-800 p-4 grid grid-rows-[auto_1fr_auto]">
          <div className="flex flex-col items-start">
            <h4 className="font-semibold mb-4">react-next-boilerplate</h4>
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
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;

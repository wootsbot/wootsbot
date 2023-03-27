import Link from 'next/link';

function Projects() {
  return (
    <section className="border rounded-xl p-10 lg:-mx-10 relative my-10">
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
          <h4 className="font-semibold mb-4">react-next-boilerplate</h4>
          <p className="mb-4">
            🚀 "boilerplate" para reducir la configuración de tus proyectos con nextJS, mejores prácticas de desarrollo
            y bibliotecas populares en la comunidad de desarrolladores.
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
    </section>
  );
}

export default Projects;

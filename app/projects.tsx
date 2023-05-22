import Link from 'next/link';

function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="h-px bg-white/20 w-full mb-4" />

        <Link className="blog-item cursor-pointer" href="https://github.com/wootsbot/X-boilerplate" target="_blank">
          <article>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold mb-4">X-boilerplate</h4>
              <p className="mb-4">
                🪂 X-boilerplate un "boilerplate" con configuración y mejores prácticas para sus proyectos de Nextjs,
                para que solo pueda concentrarse en crear su producto
              </p>
            </div>
          </article>
        </Link>
      </div>

      <div>
        <div className="h-px bg-white/20 w-full mb-4" />

        <Link
          className="blog-item cursor-pointer"
          href="https://github.com/icons-pack/react-simple-icons"
          target="_blank"
        >
          <article>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold mb-4">react-simple-icons</h4>
              <p className="mb-4">
                📦 Este paquete proporciona los Simple Icons empaquetados como un conjunto de componentes de React.
              </p>
            </div>
          </article>
        </Link>
      </div>

      <div>
        <div className="h-px bg-white/20 w-full mb-4" />

        <Link
          className="blog-item cursor-pointer"
          href="https://github.com/react-next-boilerplate/react-next-boilerplate"
          target="_blank"
        >
          <article>
            <div className="flex flex-col items-start">
              <h4 className="font-semibold mb-4">react-next-boilerplate</h4>
              <p className="mb-4">
                🚀 "boilerplate" para reducir la configuración de tus proyectos con nextJS, mejores prácticas de
                desarrollo y bibliotecas populares en la comunidad de desarrolladores.
              </p>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Projects;

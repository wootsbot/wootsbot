import Link from 'next/link';

function Projects() {
  return (
    <div className='flex flex-col gap-8'>
      <Link className='cursor-pointer' href='https://github.com/wootsbot/X-boilerplate' target='_blank'>
        <article>
          <div className='flex flex-col items-start gap-1'>
            <h4 className='font-semibold text-black dark:text-white'>X-boilerplate</h4>
            <p className='text-sm'>
              🪂 X-boilerplate un "boilerplate" con configuración y mejores prácticas para sus proyectos de Nextjs, para
              que solo pueda concentrarse en crear su producto
            </p>
          </div>
        </article>
      </Link>

      <Link className='cursor-pointer' href='https://github.com/icons-pack/react-simple-icons' target='_blank'>
        <article>
          <div className='flex flex-col items-start gap-1'>
            <h4 className='font-semibold text-black dark:text-white'>react-simple-icons</h4>
            <p className='text-sm'>
              📦 Este paquete proporciona los Simple Icons empaquetados como un conjunto de componentes de React.
            </p>
          </div>
        </article>
      </Link>

      <Link
        className='cursor-pointer'
        href='https://github.com/react-next-boilerplate/react-next-boilerplate'
        target='_blank'
      >
        <article>
          <div className='flex flex-col items-start gap-1'>
            <h4 className='font-semibold text-black dark:text-white'>react-next-boilerplate</h4>
            <p className='text-sm'>
              🚀 "boilerplate" para reducir la configuración de tus proyectos con nextJS, mejores prácticas de
              desarrollo y bibliotecas populares en la comunidad de desarrolladores.
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default Projects;

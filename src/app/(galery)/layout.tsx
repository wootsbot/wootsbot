import { Footer } from "#/components/layout/footer";
import { Header } from "#/components/layout/header";
import { Cd } from "#/components/markdown/cd";

export default function PostsLayoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>
        <div className="px-7 py-10">
          {children}

          <div className="max-w-2xl flex flex-col sm:mx-auto mx-4">
            <div className="mt-10">
              <p>Gracias por su interés en mis fotos. Aquí puede encontrar las herramientas que utilizo.</p>
            </div>

            <Cd />
          </div>
        </div>
      </main>

      <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 pb-32">
        <Footer />
      </div>
    </div>
  );
}

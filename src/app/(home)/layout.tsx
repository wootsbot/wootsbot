import { Footer } from "#/components/layout/footer";
import { Header } from "#/components/layout/header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 bg-[url(/assets/textures/bg-home_v3.svg)] bg-fixed bg-cover -z-10 mask-b-from-20% mask-b-to-80%" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main>
          <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 mt-12 mb-32">{children}</div>
        </main>

        <div>
          <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 pt-12 pb-32">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

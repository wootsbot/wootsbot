import { Footer } from "#/components/layout/footer";
import { Header } from "#/components/layout/header";
import { Cd } from "#/components/markdown/cd";

export default function PostsLayoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 mt-12">
          {children}

          <Cd />
        </div>
      </main>

      <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 pb-32">
        <Footer />
      </div>
    </div>
  );
}

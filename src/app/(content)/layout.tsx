import { Footer } from "#/components/layout/footer";
import { Header } from "#/components/layout/header";
import { Cd } from "#/components/markdown/cd";

export default async function PostsLayoutRoot({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      <main>
        <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 mt-12">
          <article>{children}</article>

          <Cd />
        </div>
      </main>

      <div className="max-w-2xl flex flex-col sm:mx-auto mx-4 pb-32">
        <Footer />
      </div>
    </div>
  );
}

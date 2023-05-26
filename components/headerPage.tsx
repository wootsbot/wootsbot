type HeaderPageProps = {
  title: string;
  summary: string;
};

function HeaderPage({ title, summary }: HeaderPageProps) {
  return (
    <header className="flex flex-col gap-16 mb-16">
      <h1 className="text-xl">{title}</h1>
      <p className="text-neutral-200 text-xl font-extralight">{summary}</p>
    </header>
  );
}

export default HeaderPage;

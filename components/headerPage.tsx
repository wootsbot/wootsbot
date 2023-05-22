type HeaderPageProps = {
  title: string;
  summary: string;
};

function HeaderPage({ title, summary }: HeaderPageProps) {
  return (
    <header className="flex flex-col gap-16 mb-16">
      <h1 className="text-md">{title}</h1>

      <p className="text-2xl font-light">{summary}</p>
    </header>
  );
}

export default HeaderPage;

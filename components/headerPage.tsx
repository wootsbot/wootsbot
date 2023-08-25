type HeaderPageProps = {
  title: string;
  summary?: string;
};

function HeaderPage({ title, summary }: HeaderPageProps) {
  return (
    <header className="flex flex-col gap-16 mb-16">
      <h1 className="text-xl text-black dark:text-white">{title}</h1>
      {summary && <p className="text-xl font-extralight">{summary}</p>}
    </header>
  );
}

export default HeaderPage;

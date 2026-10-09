interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="px-4 pt-28 md:px-12">
      <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-4 text-gray-400">This page is coming soon.</p>
    </div>
  );
}

export default PlaceholderPage;
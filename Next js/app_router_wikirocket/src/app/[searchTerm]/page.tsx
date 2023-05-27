import Item from "@/components/Item";
import getWikiResults from "@/lib/getWikiResults";
import Result from "postcss/lib/result";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetaData({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search Result for the ${displayTerm}`,
  };
}

export default async function SearchResult({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  // @ts-expect-error
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-2xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}

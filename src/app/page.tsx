import Navbar from "./components/navbar";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {

  return (
    <div className="flex flex-col justify-center">
      <Navbar searchParams={searchParams}/>
      <h1 className="flex justify-center">Home</h1>
    </div>
  );
}

"use client";

import EventListTable from "./ui/table/eventListTable";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./lib/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EVENTS);
  return (
    <main className="flex min-h-screen max-w-screen-xl flex-col items-center justify-center p-24 m-auto">
      {error && <p>Error : {error.message}</p>}
      {loading && <p>Loading...</p>}
      {data?.events && <EventListTable events={data.events} />}
    </main>
  );
}

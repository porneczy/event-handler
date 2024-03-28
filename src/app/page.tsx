import EventListTable from "./ui/table/eventListTable";
import { events } from "@/app/lib/placeholder-data";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-screen-xl flex-col items-center justify-center p-24 m-auto">
      <EventListTable events={events} />
    </main>
  );
}

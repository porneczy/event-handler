import EventListTable from "./ui/table/eventListTable";
import { events } from "@/app/lib/placeholder-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>table</h1>
      <EventListTable events={events} />
    </main>
  );
}

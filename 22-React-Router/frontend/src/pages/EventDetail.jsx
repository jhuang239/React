import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetail() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(loadedEvent) => <EventItem event={loadedEvent} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
      </Suspense>
    </>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // handle error
    throw new Response(JSON.stringify({ message: "Failed to load events" }), { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    // handle error
    throw new Response(JSON.stringify({ message: "Failed to load events" }), { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
}

export async function action({ request, params }) {
  const res = await fetch("http://localhost:8080/events/" + params.eventId, {
    method: request.method,
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete event" }), { status: 500 });
  } else {
    return redirect("/events");
  }
}

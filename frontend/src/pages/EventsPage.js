import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
// import useFetch from "../http";

// const requestConfig = {};
function EventsPage() {
    // const {data: eventList, isLoading, error} = useFetch('http://localhost:8080/events',requestConfig, [])
    // const fetchedEvents = eventList;
    // console.log(fetchedEvents);

    const data = useLoaderData();
    const events = data.events;
    return (
        <>
      <EventsList events={events} />
        </>
    )
}

export default EventsPage;     

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if(!response.ok){
        throw new Response(JSON.stringify({message: 'Could not fetch Error!'}),{
            status: 500,
        });
    }else {
        return response;
    }
}
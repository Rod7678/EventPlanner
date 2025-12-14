import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
// import useFetch from "../http";

// const requestConfig = {};
function EventsPage() {
    // const {data: eventList, isLoading, error} = useFetch('http://localhost:8080/events',requestConfig, [])
    // const fetchedEvents = eventList;
    // console.log(fetchedEvents);

    const events = useLoaderData();
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
        //added in some time
    }else {
        const resData = await response.json();
        return resData.events;
    }
}
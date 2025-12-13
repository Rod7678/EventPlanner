import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
// import useFetch from "../http";

// const requestConfig = {};
function EventsPage() {
    const [ isLoading, setIsLoading ] = useState();
    const [ fetchedEvents, setFetchedEvents ] = useState();
    const [error, setError ] = useState();

    useEffect(()=>{
        async function fetchEvents(){
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if(!response.ok){
                setError('Failed to Fetch Events');
            }else {
                const resData = await response.json();
                setFetchedEvents(resData.events);
            }

            setIsLoading(false);
        }
        fetchEvents();
    },[])

    // const {data: eventList, isLoading, error} = useFetch('http://localhost:8080/events',requestConfig, [])
    // const fetchedEvents = eventList;
    console.log(fetchedEvents);
    return (
        <>
        <div style={{textAlign: 'center'}}>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
        </>
    )
}

export default EventsPage;          
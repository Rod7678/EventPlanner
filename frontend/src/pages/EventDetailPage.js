import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { getAuthToken } from "../utils/auth";
import EventsList from "../components/EventsList";


function EventDetailPage() {
    const dataList = useRouteLoaderData('eventslist');
    const eventList = dataList.events;
    // console.log(dataList);
    const data = useRouteLoaderData('event-detail'); 
    const events = data.event;
    
    return (
        <>
        <h1 style={{textAlign: 'center'}}>Event detail Page</h1>
        <EventItem event={events}/>
        <EventsList events={eventList} />
        </>
    )
}

export default EventDetailPage;

export async function loader({params}){
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events/'+ id);

    if(!response.ok){
        throw new Response(
            JSON.stringify({message: 'Could not fetch events'}),
            {status: 500}
        )
    } else{
        return response;
    }
    
}


export async function action({ params, request }) {
    const id = params.eventId;
    const token = getAuthToken();
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    if(!response.ok){
        throw new Response(
            JSON.stringify({message: 'Could not fetch events'}),
            {status: 500}
        )
    } 

    return redirect('/events')
}
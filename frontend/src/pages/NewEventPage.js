import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage() {
    return (
        <>
        <h1>Its Add New Event Page Page</h1>
        <EventForm />
        </>
    )
}

export default NewEventPage;


export async function action({request, params}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }
    const response = await fetch('http://localhost:8080/events',
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(eventData),
        }
    );

    if(!response.ok){
        throw new Response({message: 'could not send events'}, {status: 500})
    }
    
    return redirect('/events')
}
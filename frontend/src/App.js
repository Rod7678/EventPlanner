import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './pages/RouterLayout';
import HomePage from './pages/HomePage';
import EventsPage, {  loader as eventLoader} from './pages/EventsPage';
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRouterLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true , element: < HomePage /> },
      { path: 'events' , element: < EventRouterLayout /> ,
        children: [
          { 
            index: true , 
            element: < EventsPage />,
            loader: eventLoader,
          },
          { 
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true , element: < EventDetailPage />, action: deleteEventAction},
              { path: 'edit' , element: < EditEventPage />, action: manipulateEventAction},
            ],
           },
          { path: 'new' , element: < NewEventPage />, action: manipulateEventAction},
        ]
      },
      
    ],

  }
])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './pages/RouterLayout';
import HomePage from './pages/HomePage';
import EventsPage, {  loader as eventLoader} from './pages/EventsPage';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetailPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRouterLayout from './pages/EventRoot';
import ErrorPage from './pages/Error';


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
              { index: true , element: < EventDetailPage /> },
              { path: 'edit' , element: < EditEventPage /> },
            ],
           },
          { path: 'new' , element: < NewEventPage />, action: newEventAction},
        ]
      },
      
    ],

  }
])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

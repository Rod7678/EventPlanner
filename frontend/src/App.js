import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './pages/RouterLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRouterLayout from './pages/EventRoot';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    
    children: [
      { index: true , element: < HomePage /> },
      { path: 'events' , element: < EventRouterLayout /> ,
        children: [
          { index: true , element: < EventsPage /> },
          { path: ':eventId' , element: < EventDetailPage /> },
          { path: 'new' , element: < NewEventPage /> },
          { path: ':eventId/edit' , element: < EditEventPage /> },
        ]
      },
      
    ],

  }
])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

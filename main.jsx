import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the components used in routes
import Hero from './Components/Hero.jsx';
import Feature from './Components/Feature.jsx';// Assuming this exists
import Blog from './Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // This means this is the default ("/") route
        element: <Hero />,
      },
      {
        path: 'feature',
        element: <Feature />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

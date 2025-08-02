import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Loader from './components/Loader';
import App from './screens';

import './scss/consolidated.scss';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "*",
      element: <Navigate to="/" />
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    }
  }
);

const RootApp: React.FC = () => (
  <Suspense fallback={<Loader/>}>
    <RouterProvider router={router} />
  </Suspense>
);

const rootElement = document.getElementById('root-react');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(<RootApp />);



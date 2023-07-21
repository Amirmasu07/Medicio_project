import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainrouter from './Mainrouter';
import { RouterProvider } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Mainrouter} />);
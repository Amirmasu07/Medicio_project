import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './CommonComponents/HeaderComponent';
// import FooterComponent from './CommonComponents/FooterComponent';
import HomePage from './Pages/HomePage';


const Mainrouter = createBrowserRouter ([
    {
        path: "/",
        element: <>
            <HeaderComponent bgcolor='transparent' />
            <HomePage />
            {/* <FooterComponent /> */}
        </>,
    },
]);

export default Mainrouter;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import ProtectedRoute from './pages/ProtectedRoute';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
//Parts
import PartsNew from './pages/parts/PartsNew';
import PartsModify from './pages/parts/PartsModify'
import PartViewCard from './pages/parts/PartViewCard'
import PartViewDetail from './pages/parts/PartViewDetail'
import PartsList from './pages/parts/PartsList';
//Inventory
import InvenCorrection from './pages/inventory/InvenCorrection';
import InvenDelete from './pages/inventory/InvenDelete';
import InvenInbound from './pages/inventory/InvenInbound';
import InvenList from './pages/inventory/InvenList';
import InvenModify from './pages/inventory/InvenModify';
import InvenOutbound from './pages/inventory/InvenView';
import InvenView from './pages/inventory/InvenView';
//DailyWorks
import DailyWorksDelete from './pages/dailyworks/DailyWorksDelete';
import DailyWorksList from './pages/dailyworks/DailyWorksList';
import DailyWorksModify from './pages/dailyworks/DailyWorksModify';
import DailyWorksNew from './pages/dailyworks/DailyWorksNew';
import DailyWorksView from './pages/dailyworks/DailyWorksView';
//Person
import PersonDelete from './pages/person/PersonDelete';
import PersonHolding from './pages/person/PersonHolding';
import PersonList from './pages/person/PersonList';
import PersonModify from './pages/person/PersonModify';
import PersonNew from './pages/person/PersonNew';
import PersonView from './pages/person/PersonView';
import { ChakraProvider } from '@chakra-ui/react';
import PartsTable from './pages/parts/PartsTable';

// import theme from './theme/theme.js';
//test


// const PATH_DAILYWORKS = '/pages/dailyworks';
// const PATH_INVENTORY = '/pages/inventory';
// const PATH_PARTS = '/pages/parts';
// const PATH_PERSON = '/pages/person';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {index: true, path: '/', element: <Home />},

        // Test --------------------------------------

        // Parts --------------------------------------
        {
          path: `/partsnew`,
          element: <PartsNew />,
        },
        {
          path: `/partsmodify/:id`,
          element: <PartsModify />,
        },
        {
          path: `/partsviewcard`,
          element: <PartViewCard />,
        },
        {
          path: `/partviewdetail/:id`,
          element: <PartViewDetail />,
        },
        {
          path: `/partslist`,
          element: <PartsList />,
        },
        {
          path: `/partstable`,
          element: <PartsTable />,
        },
      
        // Inventory --------------------------------------
        {
          path: `/invencorrection`,
          element: <InvenCorrection />,
        },
        {
          path: `/invendelete`,
          element: <InvenDelete />,
        },
        {
          path: `/inveninbound`,
          element: <InvenInbound />,
        },
        {
          path: `/invenlist`,
          element: <InvenList />,
        },
        {
          path: `/invenmodify`,
          element: <InvenModify />,
        },
        {
          path: `/invenoutbound`,
          element: <InvenOutbound />,
        },
        {
          path: `/invenview`,
          element: <InvenView />,
        },

        // DailyWorks --------------------------------------
        {
          path: `/dailydelete`,
          element: <DailyWorksDelete />,
        },
        {
          path: `/dailylist`,
          element: <DailyWorksList />,
        },
        {
          path: `/dailymodify`,
          element: <DailyWorksModify />,
        },
        {
          path: `/dailynew`,
          element: <DailyWorksNew />,
        },
        {
          path: `/dailyview`,
          element: <DailyWorksView />,
        },

        // Person --------------------------------------
        {
          path: `/persondelete`,
          element: <PersonDelete />,
        },
        {
          path: `/personholding`,
          element: <PersonHolding />,
        },
        {
          path: `/personlist`,
          element: <PersonList />,
        },
        {
          path: `/personmodify`,
          element: <PersonModify />,
        },
        {
          path: `/personnew`,
          element: <PersonNew />,
        },
        {
          path: `/personview`,
          element: <PersonView />,
        },
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ProtectedRoute from './pages/ProtectedRoute';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
//Parts
import PartsNew from './pages/parts/PartsNew';
import PartsDelete from './pages/parts/PartsDelete'
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

        // Parts --------------------------------------
        {
          path: `/partsnew`,
          element: (<ProtectedRoute requireAdmin><PartsNew /></ProtectedRoute>),
        },
        {
          path: `/partsdelete`,
          element: (<ProtectedRoute requireAdmin><PartsDelete /></ProtectedRoute>),
        },
        {
          path: `/partsmodify/:id`,
          element: (<ProtectedRoute requireAdmin><PartsModify /></ProtectedRoute>),
        },
        {
          path: `/partsviewcard`,
          element: (<ProtectedRoute><PartViewCard /></ProtectedRoute>),
        },
        {
          path: `/partviewdetail/:id`,
          element: (<ProtectedRoute><PartViewDetail /></ProtectedRoute>),
        },
        {
          path: `/partslist`,
          element: (<ProtectedRoute><PartsList /></ProtectedRoute>),
        },
        
        // Inventory --------------------------------------
        {
          path: `/invencorrection`,
          element: (<ProtectedRoute><InvenCorrection /></ProtectedRoute>),
        },
        {
          path: `/invendelete`,
          element: (<ProtectedRoute><InvenDelete /></ProtectedRoute>),
        },
        {
          path: `/inveninbound`,
          element: (<ProtectedRoute><InvenInbound /></ProtectedRoute>),
        },
        {
          path: `/invenlist`,
          element: (<ProtectedRoute><InvenList /></ProtectedRoute>),
        },
        {
          path: `/invenmodify`,
          element: (<ProtectedRoute><InvenModify /></ProtectedRoute>),
        },
        {
          path: `/invenoutbound`,
          element: (<ProtectedRoute><InvenOutbound /></ProtectedRoute>),
        },
        {
          path: `/invenview`,
          element: (<ProtectedRoute><InvenView /></ProtectedRoute>),
        },

        // DailyWorks --------------------------------------
        {
          path: `/dailydelete`,
          element: (<ProtectedRoute><DailyWorksDelete /></ProtectedRoute>),
        },
        {
          path: `/dailylist`,
          element: (<ProtectedRoute><DailyWorksList /></ProtectedRoute>),
        },
        {
          path: `/dailymodify`,
          element: (<ProtectedRoute><DailyWorksModify /></ProtectedRoute>),
        },
        {
          path: `/dailynew`,
          element: (<ProtectedRoute><DailyWorksNew /></ProtectedRoute>),
        },
        {
          path: `/dailyview`,
          element: (<ProtectedRoute><DailyWorksView /></ProtectedRoute>),
        },

        // Person --------------------------------------
        {
          path: `/persondelete`,
          element: (<ProtectedRoute requireAdmin><PersonDelete /></ProtectedRoute>),
        },
        {
          path: `/personholding`,
          element: (<ProtectedRoute requireAdmin><PersonHolding /></ProtectedRoute>),
        },
        {
          path: `/personlist`,
          element: (<ProtectedRoute requireAdmin><PersonList /></ProtectedRoute>),
        },
        {
          path: `/personmodify`,
          element: (<ProtectedRoute requireAdmin><PersonModify /></ProtectedRoute>),
        },
        {
          path: `/personnew`,
          element: (<ProtectedRoute requireAdmin><PersonNew /></ProtectedRoute>),
        },
        {
          path: `/personview`,
          element: (<ProtectedRoute requireAdmin><PersonView /></ProtectedRoute>),
        },
      ],
    },
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



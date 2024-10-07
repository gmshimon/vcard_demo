import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';


createRoot(document.getElementById('root')).render(
  <div>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </div>
)

import './index.css'

import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux"

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store/store';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import '../src/assets/scss/main.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import FullPost from "./pages/FullPost";
import AddPost from "./pages/AddPost";

const router = createBrowserRouter([
    {
        path: 'blog_react/',
        element: <Home />
    },
    {
        path: 'blog_react/posts/:id',
        element: <FullPost />
    },
    {
        path: 'blog_react/posts/add',
        element: <AddPost />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

import './App.css';
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import {
    createBrowserRouter,
    RouterProvider,
    NavLink,
    Outlet,
} from "react-router-dom";
import About from "./components/about";
import NavBar from "./components/navBar";

const activeStyle = {
    fontWeight: "bold",

    color: "red",
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
function Root() {
    return (
        <div>
            {
                <NavBar />
            }

            <ul>
                <li>
                    {/* Navlink can be used to apply style to the link to the current route.*/}

                    <NavLink
                        to="/"

                        // If the link is active, apply the activeStyle
                        style={({ isActive }) => (isActive ? activeStyle : null)}

                        Home
                    />

                </li>

                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                        About
                        QUT
                    />
                </li>

                <li>
                    <NavLink
                        to="/portfolio"
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                        Portfolio
                    />
                </li>
            </ul>

            {/* Outlet is where the active route will be rendered */}

            <Outlet />
        </div>
    );
}

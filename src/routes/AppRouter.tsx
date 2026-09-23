import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import DashboardPage from "./dashboard/page";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>
            },
            {
                path: "analytics",
                element: <h1 className="title">Analytics</h1>
            },
            {
                path: "reports",
                element: <h1 className="title">Reports</h1>
            },
            {
                path: "customers",
                element: <h1 className="title">Customers</h1>
            },
            {
                path: "new-customer",
                element: <h1 className="title">New Customer</h1>
            },
            {
                path: "verified-customers",
                element: <h1 className="title">Verified Customer</h1>
            },
            {
                path: "products",
                element: <h1 className="title">Products</h1>
            },
            {
                path: "new-product",
                element: <h1 className="title">New Products</h1>
            },
            {
                path: "inventory",
                element: <h1 className="title">Inventory</h1>
            },
            {
                path: "setthing",
                element: <h1 className="title">Setthing</h1>
            },
        ]
    }
])

export default routers;
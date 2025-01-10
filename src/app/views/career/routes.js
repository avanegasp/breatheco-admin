import React from "react";

const routes = [
    {
        path: "/career/students",
        exact: true,
        component: React.lazy(() => import("./students")),
    },
];

export default routes;
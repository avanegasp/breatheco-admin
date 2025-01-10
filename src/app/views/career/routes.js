import React from "react";

const routes = [
    {
        path: "/career/students",
        exact: true,
        component: React.lazy(() => import("./students")),
    },

    {
        path: "/career/talents",
        exact: true,
        component: React.lazy(() => import("./talents")),
    },
];

export default routes;
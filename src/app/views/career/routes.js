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
    {
        path: "/career/talents/:talentId",
        exact: true,
        component: React.lazy(() => import("./talentForm")),
    },
];

export default routes;
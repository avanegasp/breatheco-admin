import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    Avatar,
    Divider,
    Button,
    Icon,
    TablePagination,
} from "@material-ui/core";
import history from "history.js";

const SEOMenu = () => <Card className="pb-8">
<div className="p-3 flex-column">
    <h5 className="m-0">Search Engine Optimization</h5>
    <p className="mb-1 text-muted font-normal capitalize">
        SEO Strategies revole around technologies and clusters.
    </p>
    <p className="mt-0 mb-2 text-muted font-normal capitalize">
        Create as many clusters as you need and optimizer between 2 to 10 keywords on each of them.
    </p>
</div>
<Divider className="mb-8" />
<div className="mb-8">
    <p className="text-muted mt-0 mb-3 ml-3">Navegation</p>
    <Button onClick={() => history.push('./cluster')} variant="text" className="w-full justify-start px-3">
        <Icon fontSize="small">cloud_queue</Icon>
        <span className="ml-2">Clusters</span>
    </Button>
    <Button onClick={() => history.push('./technology')} variant="text" className="w-full justify-start px-3">
        <Icon fontSize="small">important_devices</Icon>
        <span className="ml-2">Technologies</span>
    </Button>
    {/* <Button onClick={() => history.push('./keyword')} variant="text" className="w-full justify-start px-3">
        <Icon fontSize="small">filter_1</Icon>
        <span className="ml-2">Keywords</span>
    </Button> */}
</div>
{/* <div>
    <p className="text-muted mt-0 mb-3 ml-3">MY TEAM</p>
    <Button variant="text" className="w-full justify-start px-3">
        <Icon fontSize="small">favorite</Icon>
        <span className="ml-2">Favorite</span>
    </Button>
</div> */}
</Card>;

export default SEOMenu;
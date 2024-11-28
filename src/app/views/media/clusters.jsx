import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    Avatar,
    Divider,
    Button,
    Icon,
    TablePagination,
    TextField,
    Hidden,
    InputAdornment,
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Breadcrumb } from "matx";
import bc from 'app/services/breathecode';
import ClusterCard from "./components/ClusterCard";
import SEOMenu from "./components/SEOMenu";

const UserList3 = () => {
    const [clusters, setClusters] = useState(null);
    const [addCluster, setAddCluster] = useState(null);
    const [technologies, setTechnologies] = useState([]);

    // const [query, setQuery] = useState(pgQuery.get('like') !== null ? pgQuery.get('like') : '');

    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(async () => {
        const resp = await bc.registry().getAllClusters({ limit: rowsPerPage, offset: page * rowsPerPage });
        if (resp.status == 200) setClusters(resp.data)
    }, [rowsPerPage, page]);

    return (
        <div className="m-sm-30">
            <div className="flex flex-wrap justify-between mb-6">
                <Breadcrumb
                    routeSegments={[
                        { name: "Content Gallery", path: "#" },
                        { name: "SEO", path: "#" },
                        { name: "Clusters", path: "/media/seo/cluster" },
                    ]}
                />
                <div className="">
                    <Button variant="contained" color="primary" onClick={() => setAddCluster(true)}>
                        Add Topic Cluster
                    </Button>
                </div>
            </div>
            <Grid container spacing={2}>
                <Grid item md={3} sm={12} xs={12}>
                    <SEOMenu />
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <Grid container spacing={2}>
                        {addCluster && <Grid item sm={12} xs={12}>
                            <ClusterCard isEditing
                                cluster={{
                                    title: 'Sample cluster',
                                    slug: 'sample-cluster',
                                    lang: 'us',
                                    isDeprecated: false,
                                    keywords: []
                                }}
                                onSubmit={async (_cluster) => {
                                    const resp = await bc.registry().createCluster(_cluster)
                                    if (resp.ok) return resp.data;
                                    else return false;
                                }}
                            />
                        </Grid>}
                        <div className="pl-4 flex items-center mb-4 mt-2">
                        <TextField
                            className="bg-paper flex-grow mr-4"
                            size="small"
                            margin="none"
                            name="query"
                            variant="outlined"
                            placeholder="Search here..."
                            // value={query}
                            // onChange={(e) => handleSearch(e.target.value)}
                            InputProps={{
                                // startAdornment: (
                                // <InputAdornment position="start">
                                //     <Icon fontSize="small">search</Icon>
                                // </InputAdornment>
                                // ),
                            }}
                            fullWidth
                            />
                            {/* <Hidden smUp> */}
                            <Icon onClick={() => console.log('click')}>clear</Icon>
                            {/* </Hidden> */}
                        </div>
                        {clusters?.results
                            .map((c) => (
                                <Grid key={c.slug} item sm={12} xs={12}>
                                    <ClusterCard cluster={c}
                                        onSubmit={async (_cluster) => {
                                            const resp = await bc.registry().updateCluster(c.slug, _cluster)
                                            if (resp.status === 200) return resp.data;
                                            else return false;
                                        }}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                    <div className="mt-4">
                        <TablePagination
                            className="px-4"
                            rowsPerPageOptions={[10, 25, 50]}
                            component="div"
                            count={clusters?.count || 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserList3;
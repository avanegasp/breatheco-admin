import React from 'react';
import { Button } from '@material-ui/core'
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';

const Talents = () =>{
    return (
        <div className="mb-sm-30" style={{margin:"20px"}}>
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <Breadcrumb routeSegments={[{ name: 'Career', path: '/talents/career' }, { name: 'Talents' }]} />
                </div>
    
                <div className="">
                    <Link to="/talents/new">
                    <Button variant="contained" color="primary">
                        Add new Talent
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Talents
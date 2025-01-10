import React from 'react';
import { Button } from '@material-ui/core'
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';

const Students = () =>{
    return (
        <div className="mb-sm-30" style={{margin: "20px"}}>
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <Breadcrumb routeSegments={[{ name: 'Career', path: '/students/career' }, { name: 'Students' }]} />
                </div>
    
                <div className="">
                    <Link to="/students/new">
                    <Button variant="contained" color="primary">
                        Add new Student
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Students
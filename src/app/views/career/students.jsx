import React from 'react';
import { Button } from '@material-ui/core'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';

const Students = () =>{
    return (
        <div className="mb-sm-30">
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <Breadcrumb routeSegments={[{ name: 'Career', path: '/students/career' }, { name: 'StudentsCareer' }]} />
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

// function App() {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/studentsCareer" component={StudentsCareer} />
//             </Switch>
//         </Router>
//     );
// }



export default Students
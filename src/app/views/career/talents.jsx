import React, { useState } from 'react';
import { Button, TableRow, TableCell, Table, TableBody, TextField } from '@material-ui/core'
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';

const Talents = () =>{
    const [talents, setTalents] = useState([
        {
            first_name: 'Angie',
            last_name: 'Vanegas',
            phone: 3165263866,
            email: 'test@gmail.com',
            profile_image_url: 'https://4geeks.com/workshops',
            city: 'Medellín',
            country: 'Colombia',
            state: 'Antioquia',
            linkedin_url: 'https://4geeks.com/workshops',
            github_url: 'https://4geeks.com/workshops',
            portfolio_url: 'https://4geeks.com/workshops',
            resume_url: 'https://4geeks.com/workshops',
            industry_interest: 'Bien',
            industry_experience: 'Bien',
            bio: 'Bien', 
        }
    ])

    return (
        <div className="mb-sm-30" style={{margin:"20px"}}>
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <Breadcrumb routeSegments={[{ name: 'Career', path: '/talents/career' }, { name: 'Talents' }]} />
                </div>
                <div>
                    <Table className="mb-4">
                        <TableBody>
                            {talents.map((talent, index) => (
                                <TableRow key={index}>
                                <TableCell className="pl-4">{talent.first_name}</TableCell>
                                <TableCell>
                                    {/* <TextField
                                    placeholder={talent.title}
                                    name={talent.name}
                                    size="small"
                                    variant="outlined"
                                    required
                                    // value={values[talent.name]}
                                    // onChange={handleChange}
                                    /> */}
                                    {talent.email}
                                </TableCell>
                                </TableRow>
                    ))}
                    </TableBody>
                </Table >
                </div>
    
                {/* <div className="">
                    <Link to="/talents/new">
                    <Button variant="contained" color="primary">
                        Add new Talent
                    </Button>
                    </Link>
                </div> */}

            </div>
        </div>
    )
}

export default Talents
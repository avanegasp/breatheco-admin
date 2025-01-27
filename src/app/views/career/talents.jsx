import React, { useState } from 'react';
import { Button, TableRow, TableCell, Table, TableBody } from '@material-ui/core'
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
                                <TableCell className="pl-4">{talent.title}</TableCell>
                                <TableCell>
                                    <h3>{talent.first_name} {talent.last_name}</h3>
                                    <p>Phone: {talent.phone}</p>
                                    <p>Email: {talent.email}</p>
                                    <p>Profile Image: {talent.profile_image_url}</p>
                                    <p>City: {talent.city}</p>
                                    <p>Country: {talent.country}</p>
                                    <p>State: {talent.state}</p>
                                    <p>Linkedin: {talent.linkedin_url}</p>
                                    <p>Github: {talent.github_url}</p>
                                    <p>Portfolio: {talent.portfolio_url}</p>
                                    <p>Resume: {talent.resume_url}</p>
                                    <p>Industry Interest: {talent.industry_interest}</p>
                                    <p>Industry Exoerience: {talent.industry_experience}</p>
                                    <p>Bio: {talent.bio}</p>
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
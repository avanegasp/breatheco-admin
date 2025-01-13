import React, { useState } from 'react'
import { TextField, Button, Card, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Formik } from 'formik';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import bc from '../../services/breathecode';


const propTypes = {
    user: PropTypes.string.isRequired,
}
const TalentPipelineForm = ({
    user
}) => {
    const history = useHistory()

    const initialValues = {
        // first_name: user?.first_name, 
        // last_name: user?.last_name,
        phone: user?.phone,
        email: user?.email,
        profile_image_url: user?.profile_image_url,
        city: user?.city,
        country: user?.country,
        state: user?.state,
        linkedin_url: user?.linkedin_url,
        github_url: user?.github_url,
        portfolio_url: user?.portfolio_url,
        resume_url: user?.resume_url,
        industry_interest: user?.industry_interest,
        industry_experience: user?.industry_experience,
        bio: user?.bio
    };
    const talentPipelineInfo = [
        // {
        //     title: 'First_name',
        //     name: 'first_name',
        //     value: initialValues.first_name,
        // },
        // {
        //     title: 'Last Name',
        //     name: 'last_name',
        //     value: initialValues.last_name,
        // },
        {
            title: 'Phone',
            name: 'phone',
            value: initialValues.phone,
        },
        {
            title: 'Email',
            name: 'email',
            value: initialValues.email,
        },
        {
            title: 'Profile Image Url',
            name: 'profile_image_url',
            value: initialValues.profile_image_url,
        },
        {
            title: 'City',
            name: 'city',
            value: initialValues.city,
        },
        {
            title: 'Country',
            name: 'country',
            value: initialValues.country,
        },
        {
            title: 'State',
            name: 'state',
            value: initialValues.state,
        },
        {
            title: 'LinkedIn url',
            name: 'linkedin_url',
            value: initialValues.linkedin_url,
        },
        {
            title: 'Github',
            name: 'github_url',
            value: initialValues.github_url,
        },
        {
            title: 'Portfolio',
            name: 'portfolio_url',
            value: initialValues.portfolio_url,
        },
        {
            title: 'Resume url',
            name: 'resume_url',
            value: initialValues.resume_url,
        },
        {
            title: 'Industry Interest',
            name: 'industry_interest',
            value: initialValues.industry_interest,
        },
        {
            title: 'Industry Experience',
            name: 'industry_experience',
            value: initialValues.industry_experience,
        },
        {
            title: 'Bio',
            name: 'bio',
            value: initialValues.bio,
        },
    ]

    const updateTalent = (values) => {
        console.log("Submitting with values:", values);
        const finalValues = {
            ... values,
            first_name: 'Oliva',
            last_name: 'Vanegas',
        }
        bc.career()
            .createTalent(finalValues)
            .then(response => {
                console.log("Talent updated:", response);
                history.push('/career/talents')
            })
            .catch(error => {
                console.error("Error updating talent:", error); 
            });
        history.push('/career/talents')
    };

    return (
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => updateTalent(values)}
        enableReinitialize
    >
    {({ values, handleChange, handleSubmit }) => (
        <form className="p-4" onSubmit={handleSubmit}>
        <Table className="mb-4">
            <TableBody>
            {talentPipelineInfo.map((item) => (
                <TableRow key={item}>
                <TableCell className="pl-4">{item.title}</TableCell>
                <TableCell>
                    <TextField
                    placeholder={item.title}
                    name={item.name}
                    size="small"
                    variant="outlined"
                    required
                    value={values[item.name]}
                    onChange={handleChange}
                    />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <div className="flex-column items-start px-4 mb-4">
            <Button color="primary" variant="contained" type="submit">
            Save Talent Details
            </Button>
        </div>
        </form>
    )}
    </Formik>
    )
}

export default TalentPipelineForm
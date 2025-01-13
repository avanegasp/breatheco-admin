import React, { useState } from 'react'
import { TextField, Button, Card } from '@material-ui/core'

const TalentPipelineForm = () => {
    const initialValues = {
        first_name: "Angie",
        last_name: "Vanegas",
        phone: 3165263866,
        email: "test@gmail.com", 
        profile_image_url: "https://4geeks.com/workshops",
        city: "Medellín",
        country: "Colombia",
        state: "Antioquia",
        linkedin_url: "https://4geeks.com/workshops",
        github_url: "https://4geeks.com/workshops",
        portfolio_url: "https://4geeks.com/workshops",
        resume_url: "https://4geeks.com/workshops",
        industry_interest: "Bien",
        industry_experience: "Bien",
        bio: "Bien",
    };
    const talentPipelineInfo = [
        {
            title: 'First_name',
            name: 'first_name',
            value: initialValues.first_name,
        },
        {
            title: 'Last Name',
            name: 'last_name',
            value: initialValues.last_name,
        },
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
}

export default TalentPipelineForm
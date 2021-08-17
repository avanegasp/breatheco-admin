import React from 'react';
import PropTypes from 'prop-types'
import { Formik } from 'formik';
import { Grid, TextField, Button } from '@material-ui/core';

export const AddEventbriteOrganization = ({ initialValues }) => (
  <Formik initialValues={initialValues} enableReinitialize>
    {() => (
      <form className="p-4">
        <Grid container spacing={3} alignItems="center">
          <Grid item md={4}>
            <TextField
              fullWidth
              label="Eventbrite API Key"
              name="address"
              size="small"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              fullWidth
              label="Eventbrite Organizer ID"
              name="email"
              size="small"
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4}>
            <Button fullWidth color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item md={12}>
            Status: Persisted (Success with 3 events...)
          </Grid>
        </Grid>
      </form>
    )}
  </Formik>
);

AddEventbriteOrganization.propTypes = {
  initialValues: PropTypes.object
};

AddEventbriteOrganization.defaultProps = {
  initialValues: {}
};

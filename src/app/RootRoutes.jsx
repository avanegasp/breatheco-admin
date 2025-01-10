import React from 'react';
import { Redirect } from 'react-router-dom';

import dashboardRoutes from './views/dashboard/DashboardRoutes';

import adminRoutes from './views/admin/routes';
import admissionsRoutes from './views/admissions/routes';
import eventsRoutes from './views/events/routes';

import certificatesRoutes from './views/certificates/certificatesRoutes';

import feedbackRoutes from './views/feedback/routes';
import mentorshipRoutes from './views/mentorship/routes';
import mediaRoutes from './views/media/routes';

import pageLayoutRoutes from './views/page-layouts/PageLayoutRoutees';
import ListRoute from './views/list/ListRoute';

import pagesRoutes from './views/leads/pagesRoutes';
import shortLinkRoutes from './views/growth/routes';

import freelanceRoutes from './views/freelance/routes';

import provisioningRoutes from './views/provisioning/routes';

import careerRoutes from './views/career/routes'

const redirectRoute = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />,
  },
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
];

const routes = [
  ...dashboardRoutes,
  ...provisioningRoutes,
  ...adminRoutes,
  ...admissionsRoutes,
  ...eventsRoutes,
  ...mediaRoutes,
  ...feedbackRoutes,
  ...pageLayoutRoutes,
  ...ListRoute,
  ...shortLinkRoutes,
  ...pagesRoutes,
  ...mentorshipRoutes,
  ...certificatesRoutes,
  ...redirectRoute,
  ...freelanceRoutes,
  ...careerRoutes,
  ...errorRoute,
];

export default routes;

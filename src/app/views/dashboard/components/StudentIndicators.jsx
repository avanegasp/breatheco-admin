import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import StudentIndicatorCards from '../shared/StudentIndicatorCards';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

const StudentIndicators = ({ data, studentActivity }) => {
  const cohortCurrentDay = studentActivity[0]?.day;
  const deliveredAssignments = data.filter((assignment) => assignment.task_status === 'DONE');
  // const undeliveredAssignments = data.filter((assignment) => assignment.task_status === 'PENDING');
  const attendance = studentActivity.filter((activity) => activity.slug === 'classroom_attendance');
  const unattendance = studentActivity.filter(
    (activity) => activity.slug === 'classroom_unattendance',
  );

  const attendancePercentages = () => ({
    a_percentage: (attendance.length * 100) / cohortCurrentDay,
    u_percentage: (unattendance.length * 100) / cohortCurrentDay,
  });

  const { a_percentage, u_percentage } = attendancePercentages();

  const lastLogin = () => {
    let dateStr = studentActivity
      .filter((activity) => activity.slug === 'breathecode_login')
      .slice(-1)[0]?.created_at;

    dateStr = dayjs(dateStr).format('MM-DD-YYYY');
    return dateStr;
  };
  // const {
  //   name, kickoff_date, ending_date, stage, teachers,
  // } = data;
  // const startDate = dayjs(kickoff_date).format('MM-DD-YYYY');
  // const endingDate = dayjs(ending_date).format('MM-DD-YYYY');
  // let teachersArray;
  // if (teachers) {
  //   const cohortTeacherArray = teachers.map((teacher) => {
  //     const { first_name, last_name, email } = teacher.user;
  //     return `${first_name} ${last_name} - ${email}`;
  //   });
  //   teachersArray = cohortTeacherArray;
  // }

  return (
    <StudentIndicatorCards
      metrics={[
        { label: 'Projects Delivered', value: deliveredAssignments.length, icon: 'group' },
        { label: 'Attendance', value: `${Math.floor(a_percentage)}%`, icon: 'star' },
        {
          label: 'Unnatendance',
          value: `${Math.floor(u_percentage)}%`,
          icon: 'tag_faces',
        },
        { label: 'Last Login', value: lastLogin(), icon: 'group' },
      ]}
    />
  );
};

StudentIndicators.propTypes = {
  data: PropTypes.object.isRequired,
  studentActivity: PropTypes.object.isRequired,
};

export default StudentIndicators;

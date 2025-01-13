import React, { useEffect, useState } from 'react';
import { Avatar, Butto, Tooltip, Icon, IconButton } from '@material-ui/core'
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';
import { SmartMUIDataTable } from 'app/components/SmartDataTable';
import bc from '../../services/breathecode';
import { id } from 'date-fns/locale';
// import { viewColumns } from '@material-ui/icons';

const Students = () => {
    const [items, setItems] = useState([])

    // useEffect(() => {
    //     const fetchStudents = async () => {
    //         try {
    //             const { data } = await bc.auth().getAcademyStudents();
    //             console.log("Data:", data)

    //             setItems(data);
    //         } catch (error){
    //             console.error('Error fetching students:', error)
    //         }
    //     };
    //     fetchStudents()
    // }, [])

    useEffect(() => {
        console.log('Current items state:', items)
    }, [items])

    return (
        <div className="mb-sm-30" style={{ margin: "20px" }}>
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <Breadcrumb routeSegments={[{ name: 'Career', path: '/students/career' }, { name: 'Students' }]} />
                </div>

                {/* <div className="">
                    <Link to="/students/new">
                        <Button variant="contained" color="primary">
                            Add new Student
                        </Button>
                    </Link>
                </div> */}
            </div>

            <div>
                <SmartMUIDataTable
                    title='All Students Graduated'
                    columns={[
                        {
                            name: 'first_name',
                            label: 'Name',
                            options: {
                                customBodyRenderLite: (dataIndex) => (
                                    <div className='flex items-center'>
                                        <Avatar className='w-48 h-48' src={items[dataIndex]?.user.profile.avatar_url}/>
                                        <div>
                                            <h5 className='ml-3 my-0 text-15'>
                                                {items[dataIndex]?.profile_academy.first_name} {items[dataIndex]?.profile_academy.last_name}
                                            </h5>
                                            <small className='text-muted ml-3'>
                                                {items[dataIndex]?.profile_academy.email || items[dataIndex].profile_academy.email}
                                            </small>
                                        </div>
                                    </div>
                                ),
                            },
                        },
                        {
                            name: 'created_at',
                            label: 'Created At',
                            options: {
                                customBodyRenderLite: (dataIndex) => (
                                    <div>{new Date(items[dataIndex]?.created_at).toLocaleDateString()}</div>
                                ),
                            },
                        },
                        {
                            name: 'actions',
                            label: 'Actions',
                            options: {
                                customBodyRenderLite: (dataIndex) => (
                                    <div className='flex justify-end'>
                                        <Tooltip title="Add Talent Pipeline">
                                            {/* <IconButton onClick={() => item.user && history.push(`/admissions/students/${item.user.id}`)}> */}
                                                <Icon>person_add</Icon>
                                            {/* </IconButton> */}
                                        </Tooltip>
                                    </div>
                                )
                            }

                        }
                    ]}
                    items={items}
                    options={{
                        print: false,
                        viewColumns: false,
                    }}
                    search={async (querys) => {
                        const graduatedStudentQuery = {
                            educational_status: 'graduated',
                            ...querys,
                        }
                        const { data } = await bc.admissions().getAllUserCohorts(graduatedStudentQuery);
                        console.log("DATA", data)
                        setItems(data.results);
                        return data
                    }}
                />
            </div>
        </div>
    )
}

export default Students
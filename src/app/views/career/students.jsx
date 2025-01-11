import React, { useEffect, useState} from 'react';
import { Button } from '@material-ui/core'
import { Breadcrumb } from 'matx';
import { Link } from 'react-router-dom';
import { SmartMUIDataTable } from 'app/components/SmartDataTable';
import bc from '../../services/breathecode';
import { id } from 'date-fns/locale';
// import { viewColumns } from '@material-ui/icons';

const Students = () =>{
    const [items, setItems]= useState([])

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

            <div>
                    <SmartMUIDataTable
                        title='All Students Graduated'
                        columns={[
                            {
                                name: 'first_name',
                                label: 'Name',
                                options: {                                    
                                    customBodyRenderLite: (dataIndex) => (
                                        <div>
                                            {items[dataIndex]?.profile_academy.first_name} {items[dataIndex]?.profile_academy.last_name}
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
                        ]}
                        items={items}
                        options={{
                            print:false,
                            viewColumns: false,
                        }}
                        search={async (querys) => {
                            const finalQuerys = {
                                educational_status: 'graduated',
                                ...querys,
                            }
                            const { data } = await bc.admissions().getAllUserCohorts(finalQuerys);
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
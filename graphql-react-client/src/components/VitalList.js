import React from 'react';
import {gql, useQuery} from "@apollo/client";
import './sample.css';
import './addstyle.css'
//
//
// To parse the GraphQL operations, we use a special function
// called a tagged template literal to allow us to express them
// as JavaScript strings. This function is named gql
//
// note the backquotes here
const GET_VITALS = gql`
{
    students{
        _id
      bodytemp
      heartrate
      bloodpressure
      respitoryrate
      
    }
}
`;
//
const StudentList = () => {

    const { loading, error, data , refetch } = useQuery(GET_VITALS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (

        <div>
            
            <table >
                <tr>
                        <th>_id</th>
                        <th>bodytemp</th>
                        <th>heartrate</th>
                        <th>bloodpressure</th>
                        <th>respitoryrate</th>

                </tr>
                {data.vitals.map((vital, index) => (
                        <tr key={index}>
                            <td>{vital._id}</td>
                            <td>{vital.bodytemp}</td>
                            <td>{vital.heartrate}</td>
                            <td>{vital.bloodpressure}</td>
                            <td>{vital.respitoryrate}</td>

                        </tr>
                ))}
             
            </table>
            
            <div class="center">
                <button class = "center" onClick={() => refetch()}>Refetch</button>
            </div>
            
        </div>
        
    );
}

export default StudentList


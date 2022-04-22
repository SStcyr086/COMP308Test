import React, { Component } from 'react';
import { gql, useMutation } from '@apollo/client';

import { Link } from 'react-router-dom';
//
import './addstyle.css';
//import './display.css';
//
const ADD_VITAL = gql`
    mutation AddVital(
        $id: Int!,  
        $bodytemp: String!,
        $heartrate: String!,
        $bloodpressure: String!,
        $respitoryrate: String!
        ) {
        addVital(
            bodytemp: $bodytemp,  
            heartrate: $heartrate,
            bloodpressure: $bloodpressure,
            respitoryrate: $respitoryrate
            ) {
            _id
        }
    }
`;

const Nurse = () => {

    let bodytemp,heartrate,bloodpressure, respitoryrate;
    const [addVital, { data, loading, error }] = useMutation(ADD_VITAL);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <form
                onSubmit={e => {    
                    e.preventDefault();
                    addVital({ variables: { bodytemp: bodytemp.value,heartrate:heartrate.value,
                        bloodpressure: bloodpressure.value, respitoryrate: respitoryrate.value, 
        
                      }});

                    bodytemp.value = '';
                    heartrate.value = '';
                    bloodpressure.value = '';
                    respitoryrate.value='';             

                }}
            >
                <div class="outer_container">
                <div class="container">
                    <label>
                        <b>Body Temperature:</b>
                    </label>
                    <input type="text" class="fields" name="bodytemp" ref={node => {bodytemp = node; }} 
                    placeholder="Body Temperature:" />
                </div>
                <div class="container">
                    <label>
                        <b>Heart Rate:</b>
                    </label>
                    <input type="text" class="fields" name="heartrate" ref={node => {heartrate = node; }} 
                    placeholder="Heart Rate:" />
                </div>
                <div class="container">
                    <label>
                        <b>Blood Pressure:</b>
                    </label>
                    <input type="text" class="fields" name="bloodpressure" ref={node => {bloodpressure = node; }} 
                    placeholder="Blood Pressure:" />
                </div>
                <div class="container">
                    <label>
                        <b>Respitory Rate:</b>
                    </label>
                    <input type="text" class="fields" name="respitoryrate" ref={node => {respitoryrate = node; }}
                    placeholder="Respitory Rate:" />
                </div>
                <div class="container">
                    <button type="submit" class="fields">Add Vital</button>

                </div>
                </div>
            </form>
        </div>
    );
}

export default Nurse

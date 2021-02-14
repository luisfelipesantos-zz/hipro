import React from 'react';

export const JobApplication: React.FC<JobApplicationProps> = ({ job }) => {
    return (
        <div> 
            <p><b>Company: </b> {job.company} </p> 
            <p><b>Role: </b> {job.role} </p>
            <p><b>Status: </b> {job.status} </p>
        </div>
    );
}
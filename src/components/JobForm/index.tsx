import React from 'react';

export const JobForm: React.FC = () => {
    return (
        <>
            <h4>Add a job application</h4>
            <input type="text"/>
            <input type="text"/>
            <select name="status" id="">
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="practice interview">Practice Interview</option>
                <option value="job offer">Job Offer</option>
                <option value="hired">Hired</option>
            </select>
            <button>Add</button>
        </>
    );
}
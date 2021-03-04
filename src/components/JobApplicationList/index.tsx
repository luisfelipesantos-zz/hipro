import React from 'react';
import { JobApplication } from '../JobApplication';
import { useSelector } from 'react-redux';



export const JobApplicationList: React.FC = ({}) => {
    const { jobs } = useSelector((state: JobApplicationState) => {
      return {
        jobs: state.jobs
      }
    });

  return (
    <>
      {
        jobs.map(job => <JobApplication key={Math.random()} job={job} />)
      }
    </>
  );
}


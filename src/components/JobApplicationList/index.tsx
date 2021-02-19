import React from 'react';
import { JobApplication } from '../JobApplication';

interface Props {
    jobs: JobApplication[]
}

export const JobApplicationList: React.FC<Props> = ({ jobs }) => {
  return (
    <>
      {
        jobs.map(job => <JobApplication job={job} />)
      }
    </>
  );
}


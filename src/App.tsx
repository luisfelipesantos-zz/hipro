import React from 'react';
import { JobApplicationList } from './components/JobApplicationList';
import { JobForm } from './components/JobForm';

const jobs: JobApplication[] = [
  {
    company: "Rhaimes", role: "Dev Full-stack", status: "Hired"
  },  
  {
    company: "Google", role: "Software Engineer", status: "Applied"
  }
]; 

const App: React.FC = () => {
  return (
    <>
      <JobForm /><hr/>
      <JobApplicationList jobs={jobs} />
    </>
  );
}

export default App;

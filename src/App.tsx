import React, { useState } from 'react';
import { JobApplicationList } from './components/JobApplicationList';
import { JobForm } from './components/JobForm';
import { GlobalStyle } from './globalStyles';
import logo from './assets/logo.png';

const initialJobs: JobApplication[] = [
  {
    company: "Rhaimes", role: "Dev Full-stack", status: "Hired"
  },  
  {
    company: "Google", role: "Software Engineer", status: "Applied"
  }
]; 

const App: React.FC = () => {

  const [jobs, setJobs] = useState(initialJobs);

  const addJobApplication: AddJobApplication = (job: JobApplication) => {
    const newJob: JobApplication = job;
    setJobs([...jobs, newJob]);
  }

  return (
    <>
      <GlobalStyle />
      <img src={logo} alt="HiPro logo"/>
      <JobForm addJobApplication={addJobApplication} /><hr/> 
      <JobApplicationList jobs={jobs} />
    </>
  );
}

export default App;

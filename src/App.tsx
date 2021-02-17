import React from 'react';
import { JobApplicationList } from './components/JobApplicationList';
import { JobForm } from './components/JobForm';
import { GlobalStyle } from './globalStyles';
import logo from './assets/logo.png';

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
      <GlobalStyle />
      <img src={logo} alt="HiPro logo"/>
      <JobForm /><hr/> 
      <JobApplicationList jobs={jobs} />
    </>
  );
}

export default App;

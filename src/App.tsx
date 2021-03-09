import React, { useState } from 'react';
import { JobApplicationList } from './components/JobApplicationList';
import { JobForm } from './components/JobForm';
import { GlobalStyle } from './globalStyles';
import logo from './assets/logo.png';
import { Provider } from 'react-redux';
import store from './store';

const initialJobs: JobApplication[] = [];


const App: React.FC = () => {

  const [jobs, setJobs] = useState(initialJobs);


  return (
    <Provider store={store}>
      <GlobalStyle />
      <img src={logo} alt="HiPro logo"/>
      <JobForm/><hr/> 
      <JobApplicationList />
    </Provider>
  );
}

export default App;

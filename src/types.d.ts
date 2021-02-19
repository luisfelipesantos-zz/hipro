interface JobApplication {
    company: string;
    role: string;
    status: string;
}

interface JobApplicationProps {
  job: JobApplication;
}

type AddJobApplication = (job: JobApplication) => void;
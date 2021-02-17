interface JobApplication {
    company: string;
    role: string;
    status: string;
}

interface JobApplicationProps {
  job: JobApplication;
}

interface Props {
    jobs: JobApplication[]
}
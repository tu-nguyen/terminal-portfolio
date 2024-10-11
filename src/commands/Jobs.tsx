import jobs from '../data/jobs.json';
import Job from './Job';


const Jobs = () => {
    return (
        <>
            {jobs.map((job) => (
                <Job key={job.id} job={job} />
            ))}
        </>
    );
};

export default Jobs;
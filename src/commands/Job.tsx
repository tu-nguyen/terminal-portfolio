const Job = ({ job }: { job: {title: string, company: string, date: string, description: string}}) => {
    // let tect = job.skills.join("    ");
    
    return (
        <>
        <p>[{job.title}]</p><p> @ </p><p className="link">{job.company}</p><br />
        <p>&lt;{job.date}&gt;</p><br />
        {/* <p>{tect}</p><br /> */}
        <p>{job.description}</p><br />
    </>
  )
}

export default Job

const Project = ({ project }: { project: { title: string, date: string, description: string, technologiesUsed: string[], githubLink: string } }) => {
  return (
    <>
      <p className="highlight">[{project.title}]</p><br />
      <p>&lt;{project.date}&gt;</p><br />
      <p>{project.description}</p><br />
      <p className="highlight">Technologies Used: {project.technologiesUsed.join("   ")}</p><br />
      <p><a className="link" href={project.githubLink} target="_blank">Click here</a> to visit the github page</p><br />
    </>
  )
}

export default Project;

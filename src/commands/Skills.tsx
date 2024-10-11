const Skills = () => {
    return (
        <>
            <p>usage: <p className="highlight">skills</p> [arg]...</p>
            <pre>   [args]</pre>
            <pre>       <p className="highlight">ls</p>: list all available skills</pre>
            <pre>   [examples]</pre>
            <pre>       <p className="highlight">skills</p> ls</pre>
            <pre>       <p className="highlight">skills</p> python</pre>
            <br />
            <p>Here are some of the skills I have to offer.</p><br />
            <p className="highlight">Languages:</p><p> <strong>Python</strong>, JavaScript, TypeScript, <strong>SQL</strong>, Bash, HTML5, CSS3</p><br />
            <p className="highlight">Frameworks & Libraries:</p><p> <strong>Django</strong>, Flask, FastAPI, <strong>React</strong>, Node.js, Express, Vite, Bootstrap, Tailwind
            </p><br />
            <p className="highlight">Databases:</p><p> PostgreSQL, MySQL, DynamoDB, MongoDB, Redis
            </p><br />
            <p className="highlight">Tools & Technologies:</p><p> <strong>AWS</strong>, Git, Docker, Kubernetes, Terraform, Ansible, Jenkins, CI/CD, Nginx, ETL, Prometheus, Selenium, RESTful APIs, JSON, YAML
            </p><br />
            <p className="highlight">Operating Systems:</p><p> Unix/Linux, Windows, macOS
            </p><br />
            <p className="highlight">Technologies (Out of Practice):</p><p> .NET, Qt, C, C++, C#, Java
            </p>
            <br />
        </>
    );
};

export default Skills;
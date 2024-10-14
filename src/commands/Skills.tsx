const Skills = ({ args }: {args: string[]}) => {

    if (args) {
        if (args[0] == "ls" || args[0] == "list") {
            return (
                <>
                    <p className="highlight">python</p><br />
                    <p className="highlight">django</p><br />
                    <p className="highlight">react</p><br />
                    <p className="highlight">javascript</p><br />
                    <p className="highlight">sql</p><br />
                    <p className="highlight">devops</p>
                    <br />
                </>
            )
        } else if (["python", "django", "react", "javascript", "sql", "devops"].includes(args[0])) {
            const skillOut = {
                "python":   <>
                                <p>This output is currently in todo</p>
                            </>,
                "django":   <>
                                <p>This output is currently in todo</p>
                            </>,
                "react":   <>
                                <p>This output is currently in todo</p>
                            </>,
                "javascript":   <>
                                <p>This output is currently in todo</p>
                            </>,
                "sql":   <>
                                <p>This output is currently in todo</p>
                            </>,
                "devops":   <>
                                <p>This output is currently in todo</p>
                            </>,
            }[args[0].toLocaleLowerCase().trim()]

            return (
                <>
                    {skillOut}
                </>
            )
        }
    }


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
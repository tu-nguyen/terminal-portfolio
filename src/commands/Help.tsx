const Help = ({ ls = false }) => {
    function display_alt(ls: boolean) {
        if (ls) {
            return <><p>Did you mean <a className="highlight">help?</a></p><br /></>
        }
    }
    return (
        <>
            {display_alt(ls)}
            <p>Here are the available commands:</p><br />
            <div className="grid grid-flow-col auto-cols-max">
                <div>
                    <p className="highlight">resume</p><br />
                    <p className="highlight">welcome</p><br />
                    <p className="highlight">help</p><br />
                    <p className="highlight">whoami</p><br />
                    <p className="highlight">about</p><br />
                    <p className="highlight">skills</p><br />
                    <p className="highlight">work</p><br />
                    <p className="highlight">projects</p><br />
                    <p className="highlight">socials</p><br />
                    <p className="highlight">meet</p><br />
                    <p className="highlight">email</p><br />
                    <p className="highlight">theme</p><br />
                    <p className="highlight">setname</p><br />
                    <p className="highlight">clear</p><br />
                    <p className="highlight">history</p><br />
                    <p className="highlight">echo</p><br />
                    <p className="highlight">exit</p><br />
                </div>
                <div>
                    <pre>       - view my resume</pre>
                    <pre>       - display welcome screen</pre>
                    <pre>       - check available commands</pre>
                    <pre>       - display current user</pre>
                    <pre>       - about me</pre>
                    <pre>       - display my skills</pre>
                    <pre>       - view my work history</pre>
                    <pre>       - view my projects</pre>
                    <pre>       - check available socials commands</pre>
                    <pre>       - set up time for quick chat</pre>
                    <pre>       - send me an email</pre>

                    <pre>       - display available theme commands</pre>
                    <pre>       - change current user</pre>
                    <pre>       - clear the terminal output</pre>
                    <pre>       - view command history</pre>
                    <pre>       - print out anything</pre>
                    <pre>       - go back to main portfolio page</pre>
                </div>
            </div>
        </>
    );
};

export default Help;
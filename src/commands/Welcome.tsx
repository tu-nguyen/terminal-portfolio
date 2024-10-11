const Welcome = () => {
    return (
        <>
            <p>Welcome to my terminal portfolio!</p><br />
            <p>Created with <strong className="highlight">React</strong>, <strong className="highlight">Vite</strong>, and <strong className="highlight">Tailwind CSS</strong></p>
            <div>----------------------------</div>
            <div>
                This project's source code can be found in this project's{" "}
                <a className="link" href="https://github.com/tu-nguyen/terminal-portfolio">
                    GitHub repo
                </a>.<br />
                <p>To view the gui version type <span className="highlight">exit</span></p>
            </div>
            <div>----------------------------</div>
            <div>
                For a list of available commands, type <span className="highlight">help</span>.
            </div>
        </>
    );
};

export default Welcome;
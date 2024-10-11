import { link_map } from '../data/links';


const Contact = ({ name }: { name: string | null }) => {
    function ContactLink({ name }: { name: string | null }) {
        if (name == "" || name == null) {
            return (
                <>
                    <p>usage: Enter these as commands to automatically open their link</p><br />
                    <p className="highlight" >email</p><br />
                    <p className="highlight" >linkedin</p><br />
                    <p className="highlight" >github</p><br />
                    <p className="highlight" >meet</p><br />
                    <p className="highlight" >resume</p><br />
                    <br />
                    <p>Email: <a className="link" href="mailto:tu.t.nguyen93@gmail.com" target="_blank">tu.t.nguyen93@gmail.com</a></p><br />
                    <p>Github: <a className="link" href="https://github.com/tu-nguyen" target="_blank">https://github.com/tu-nguyen</a></p><br />
                    <p>LinkedIn: <a className="link" href="https://www.linkedin.com/in/tu-nguyen/" target="_blank">https://www.linkedin.com/in/tu-nguyen</a></p><br />
                    <p>Calendly: <a className="link" href="https://calendly.com/tu-t-nguyen/quick-chat" target="_blank">https://calendly.com/tu-t-nguyen/quick-chat</a></p><br />
                </>
            )
        } else if (name == "resume") {
            return <>{name} opening..<br /></>

        } else if (name == "email") {
            return <>opening {name} to send to tu.t.nguyen@gmail.com..<br /></>
        } else if (name in link_map) {
            return <>{name} link opening..<br /></>

        } else {
            return <>This social does not exist.<br /></>
        }
    }

    return (
        <>
            <p><ContactLink name={name} /></p>
        </>
    );
};

export default Contact;
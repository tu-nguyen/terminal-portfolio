import { Dispatch, useEffect } from 'react';


const SetTheme = ({ setTheme, arg, newTheme }: { setTheme: Dispatch<string>, arg: string, newTheme: string }) => {
    if (arg == "" || arg == null) {
        return (
            <>
                <p>usage: <p className="highlight">theme</p> [arg]...</p>
                <pre>   [args]</pre>
                <pre>       <p className="highlight">ls</p>: list all available themes</pre>
                <pre>       <p className="highlight">set</p>: set theme to [theme]</pre>
                <pre>   [examples]</pre>
                <pre>       <p className="highlight">theme</p> ls</pre>
                <pre>       <p className="highlight">theme</p> set dark</pre>
            </>
        )
    } else if (arg == "ls" || arg == "list") {
        return (
            <>
                <p className="highlight">dark</p><br />
                <p className="highlight">ubuntu</p><br />
                <p className="highlight">matrix</p><br />
                <p className="highlight">dark-dracula</p><br />
                <p className="highlight">solar</p>
                <br />
            </>
        )
    } else if (arg == "set") {
        if (newTheme == "" || newTheme == null || !["dark", "ubuntu", "matrix", "dark-dracula", "solar"].includes(newTheme)) {
            return <>{newTheme} is not a valid theme<br /></>
        } else {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
                setTheme(newTheme);
            }, [newTheme, setTheme]);
        }
    } else {
        return <>{arg} is not a valid theme [arg]<br /></>
    }
    return "";
};

export default SetTheme;
import { Dispatch, useEffect } from 'react'


const SetTheme = ({setTheme, arg, newTheme}: {setTheme: Dispatch<string>, arg: string, newTheme: string}) => {
    if (arg == "" || arg == null) {
        return (
        <>
        <p>usage: theme [arg]...</p>
        <pre>   [args]</pre>
        <pre>       ls: list all available themes</pre>
        <pre>       set: set theme to [theme]</pre>
        <pre>   [examples]</pre>
        <pre>       theme ls</pre>
        <pre>       theme set dark</pre>
        </>
        )
    } else if (arg == "ls" || arg == "list") {
        return (
        <>
        <p>dark</p><br />
        <p>ubuntu</p><br />
        <p>matrix</p><br />
        <p>dark-dracula</p><br />
        <p>solar</p>
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
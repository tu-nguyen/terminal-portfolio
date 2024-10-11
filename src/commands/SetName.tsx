import { Dispatch, useEffect } from 'react';


const SetName = ({ setUsername, newName }: { setUsername: Dispatch<string>, newName: string }) => {
    if (newName == "" || newName == null) {
        return (
            <>
                <p>usage: <p className="highlight">setname</p> [username]...</p>
                <pre>   [examples]</pre>
                <pre>       <p className="highlight">setname</p> luffy</pre>
            </>
        )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setUsername(newName);
        }, [newName, setUsername]);
    }
    return `Hello ${newName}!\n`;
};

export default SetName;
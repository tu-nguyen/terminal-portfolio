import { Dispatch, useEffect } from 'react'


const SetName = ({setUsername, newName}: {setUsername: Dispatch<string>, newName: string}) => {
    if (newName == "" || newName == null) {
        return (
            <>
            <p>usage: setname [username]...</p>
            <pre>   [examples]</pre>
            <pre>       setname luffy</pre>
            </>
            )
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setUsername(newName);
          }, [newName, setUsername]);
    }
    return "";
};

export default SetName;
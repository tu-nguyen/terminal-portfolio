import { Dispatch, useEffect } from 'react';


const Sudo = ({ setSymbol }: { setSymbol: Dispatch<string> }) => {
    useEffect(() => {
        setSymbol("#");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ["#", setSymbol]);
    
    return "not rly\n";
};

export default Sudo;
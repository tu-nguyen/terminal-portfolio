/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, useEffect } from 'react'


const Clear = ({setOutput}: { setOutput: Dispatch<{
  id?: number;
  username: string;
  hostname: string;
  path: string;
  symbol: string;
  command: string;
  args: string[] | string;
  out: unknown;
}[]>}) => { 
    useEffect(() => {
        setOutput([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [[], setOutput]);

    return "";
};

export default Clear;
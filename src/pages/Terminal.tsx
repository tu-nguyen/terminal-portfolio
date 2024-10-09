import React, { useCallback, useEffect, useRef, useState } from 'react';
import Command from '../components/Command';
import Output from '../components/Output';
import { link_map } from '../data/links'
import Welcome from '../commands/Welcome';



var output_count = 1

const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["welcome"]);
    const [pointer, setPointer] = useState(-1);
    const [username, setUsername] = useState("guest")
    const [hostname, setHostname] = useState("tu-nguyen.github.io")
    const [path, setPath] = useState("~")
    const [symbol, setSymbol] = useState("$")
    const [theme, setTheme] = useState("ubuntu")
    const [link, setLink] = useState("")
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const [output, setOutput] = useState<any[]>([{
        "id": output_count,
        "username": username,
        "hostname": hostname,
        "path": path,
        "symbol": symbol,
        "command": "welcome",
        "args": "",
        "out": Welcome(),
    }]);


    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const handleClick = useCallback(
        () => {
            inputRef.current.focus();
        },[])

    const handleChange = useCallback(
        (        e: { target: { value: React.SetStateAction<string>; }; }) => {
            setInput(e.target.value);
        }, 
        []
    )

    const handleKeyDown = useCallback(
        (        e: { key: string; }) => {
            if (e.key === "Enter") {
                console.log("enter")
            } else if (e.key === "ArrowUp") {
                if ( pointer >= history.length || pointer + 1 == history.length ) {
                    return;
                }
                setInput(history[pointer + 1])
                setPointer(prevState => prevState + 1);
            } else if (e.key === "ArrowDown") {
                if (pointer < 0) {
                    return;
                }
                if (pointer === 0) {
                    setInput("");
                    setPointer(-1);
                    return;
                  }
                  setInput(history[pointer - 1]);
                  setPointer(prevState => prevState - 1);
            };
        }, 
        [history, pointer]
    )

    const handleSubmit = (
        (        e: { preventDefault: () => void; }) => {
            e.preventDefault();
            const input_arr = input.split(/\s+/)
            const cmd = input_arr[0]
            const args = input_arr.slice(1)

            if (input == "" || input == null || input == undefined) { /* empty */ } else {
                output_count += 1
                setHistory([input, ...history]);
            }

            const newOutput = Command(
                cmd, 
                args,
                output_count,
                username, 
                hostname, 
                path, 
                symbol,
                setUsername,
                setHostname,
                setOutput,
                setTheme,
                history,
            )
            setOutput([newOutput, ...output])
            setInput("");

            if (cmd == "exit") {
                window.open("https://tu-nguyen.github.io/", "_self")
            } else if (cmd in link_map) {
                window.open(link_map[cmd])
            } else if (cmd == "socials" && args[0] in link_map) {
                window.open(link_map[args[0]])
            }
        }
    )

    const prompt_theme = theme + "-prompt"

    return (
        <div
            className={`${theme} terminal`}
            ref={containerRef}
            onClick={handleClick}
        >
            <Output output={output} theme={theme}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="terminal-input"><div className={prompt_theme}>{username}@{hostname}</div>~$ </label>
                <input
                    id = "terminal-input"
                    title="terminal-input"
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
            </form>
        </div >
    );
};

export default Terminal;
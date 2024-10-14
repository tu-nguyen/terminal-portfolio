/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Command from '../components/Command';
import Output from '../components/Output';
import { link_map } from '../data/links';
import Welcome from '../commands/Welcome';


interface OutputType {
    id?: number;
    username: string;
    hostname: string;
    path: string;
    symbol: string;
    command: string;
    args: string[] | string;
    out: unknown;
};

let output_count = 1;

const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["welcome"]);
    const [pointer, setPointer] = useState(-1);
    const [username, setUsername] = useState("guest");
    const [hostname, setHostname] = useState("tu-nguyen.github.io");
    const [path] = useState("~"); // temp removed setPath
    const [symbol, setSymbol] = useState("$");
    const [theme, setTheme] = useState("dark");
    // const [link, setLink] = useState("");
    const containerRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollToRef = useRef<HTMLDivElement>(null);
    const initOutput = {
        "id": output_count,
        "username": username,
        "hostname": hostname,
        "path": path,
        "symbol": symbol,
        "command": "welcome",
        "args": [""],
        "out": Welcome(),
    } as unknown as OutputType;
    const [output, setOutput] = useState<{
        id?: number;
        username: string;
        hostname: string;
        path: string;
        symbol: string;
        command: string;
        args: string[] | string;
        out: unknown;
    }[]>([initOutput]);


    useEffect(() => {
        inputRef.current?.focus();

        scrollToRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [history, input, output]);

    const handleClick = useCallback(
        () => {
            inputRef.current?.focus();
        }, []);

    const handleChange = useCallback(
        (e: { target: { value: React.SetStateAction<string>; }; }) => {
            setInput(e.target.value);
        }, []);

    const handleKeyDown = useCallback(
        (e: { 
            key: string; preventDefault: () => void; 
        }) => {
            if (e.key === "Tab") {
                e.preventDefault();
                if (!input) return;
                
                console.log("tab completetion on todo")

            } else if (e.key === "ArrowUp") {
                if (pointer >= history.length || pointer + 1 == history.length) {
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
        }, [history, pointer]);

    const handleSubmit = (
        (e: { preventDefault: () => void; }) => {
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
                setSymbol,
                setUsername,
                setHostname,
                setOutput,
                setTheme,
                history
            ) as unknown as OutputType
            setOutput([newOutput, ...output])
            setInput("");

            if (cmd == "exit") {
                window.open("https://tu-nguyen.github.io/", "_self")
            } else if (cmd in link_map) {
                window.open(link_map[cmd as keyof typeof link_map])
            } else if (cmd == "socials" && args[0] in link_map) {
                window.open(link_map[args[0] as keyof typeof link_map])
            }
        }
    )

    const prompt_theme = theme + "-prompt"


    return (
        <>
            <div
                className={`${theme} terminal`}
                ref={containerRef}
                onClick={handleClick}
            >
                <Output output={output} theme={theme}/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="terminal-input"><div className={`${prompt_theme} prompt`}>{username}@{hostname}</div><p className="path">{path}</p>{symbol} </label>
                    <input
                        id="terminal-input"
                        title="terminal-input"
                        type="text"
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        autoFocus
                    />
                </form>
            </div >

            <div ref={scrollToRef} />
        </>
    );
};

export default Terminal;
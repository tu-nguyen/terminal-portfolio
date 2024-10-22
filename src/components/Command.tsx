import React from "react";
import About from "../commands/About"
import Clear from "../commands/Clear";
import Welcome from "../commands/Welcome";
import SetName from "../commands/SetName";
import Echo from "../commands/Echo";
import Help from "../commands/Help";
import Jobs from "../commands/Jobs";
import Projects from "../commands/Projects";
import Contact from "../commands/Contact";
import SetTheme from "../commands/SetTheme";
import Skills from "../commands/Skills";
import History from "../commands/History";
import Sudo from "../commands/Sudo";
import DateCommand from "../commands/DateCommand";
import Weather from "../commands/Weather";


const Command = (
    cmd: string,
    args: string[],
    output_count: number,
    username: string,
    hostname: string,
    path: string,
    symbol: string,
    setSymbol: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; },
    setUsername: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; },
    _setHostname: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; },
    setOutput: {
        (value: React.SetStateAction<{
            id?: number;
            username: string;
            hostname: string;
            path: string;
            symbol: string;
            command: string;
            args: string[] | string;
            out: unknown;
        }[]>): void; (value: React.SetStateAction<{
            id?: number;
            username: string;
            hostname: string;
            path: string;
            symbol: string;
            command: string;
            args: string[] | string;
            out: unknown;
        }[]>): void;
    },
    setTheme: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; },
    history: string[],
): {
    id?: number;
    username: string;
    hostname: string;
    path: string;
    symbol: string;
    command: string;
    args: string[] | string;
    out: unknown;
} => {

    const newOut = {
        "test": "test\n",
        "welcome": <Welcome />,
        "help": <Help />,
        "ls": <Help ls={true} />,
        "whoami": <Echo args={username} />,
        "about": <About />,
        "exp": <Jobs />,
        "experience": <Jobs />,
        "experiences": <Jobs />,
        "jobs": <Jobs />,
        "job": <Jobs />,
        "work": <Jobs />,
        "projects": <Projects />,
        "project": <Projects />,
        "portfolio": <Projects />,
        "skill": <Skills args={args} />,
        "skills": <Skills args={args} />,
        "contact": <Contact name={args[0]} />,
        "contacts": <Contact name={args[0]} />,
        "social": <Contact name={args[0]} />,
        "socials": <Contact name={args[0]} />,
        "email": <Contact name={"email"} />,
        "linkedin": <Contact name={"linkedin"} />,
        "github": <Contact name={"github"} />,
        "meet": <Contact name={"meet"} />,
        "resume": <Contact name={"resume"} />,
        "setname": <SetName setUsername={setUsername} newName={args[0]} />,
        "settheme": <SetTheme setTheme={setTheme} arg={"set"} newTheme={args[0]} />,
        "theme": <SetTheme setTheme={setTheme} arg={args[0]} newTheme={args[1]} />,
        "clear": <Clear setOutput={setOutput} />,
        "his": <History history={history} />,
        "hist": <History history={history} />,
        "history": <History history={history} />,
        "echo": <Echo args={args.join(" ")} />,
        "date": <DateCommand />,
        "datetime": <DateCommand />,
        "now": <DateCommand />,
        "weather": <Weather />,
        "su": <Sudo setSymbol={setSymbol} />,
        "sudo": <Sudo setSymbol={setSymbol} />,
    }[cmd.toLocaleLowerCase().trim()]

    return ({
        "id": output_count,
        "username": username,
        "hostname": hostname,
        "path": path,
        "symbol": symbol,
        "command": cmd,
        "args": args.join(" "),
        "out": newOut,
    })
}

export default Command;
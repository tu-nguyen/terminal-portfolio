import Prompt from "./Prompt";

function Output({output, theme}: {output: {
    id?: number;
    username: string;
    hostname: string;
    path: string;
    symbol: string;
    command: string;
    args: string[] | string;
    out: unknown;
}[] , theme: string}) {
    // eslint-disable-next-line no-var
    var theme = theme + "-prompt";

    function Display({cmd, output}: {cmd: string | null, output: unknown}) {
        if (cmd == "" || cmd == null) {
            return <><br /></>
        } else if (!output) {
            console.log(output)
            return <><br />{cmd} is not a valid command<br /></>
        } else {
            return <><br />{output}</>
        }
    }

    const temp_output = [...output].reverse()

    return (
        <>
            {temp_output.map((out) => (
                <>
                <Prompt key={out.id} out={ out } theme={theme}/> {out.command} {out.args} 
                <Display cmd={out.command} output={out.out} />
                {/* <br />{out.out}<br /> */}
                </>
            ))}
        </>
    )
  };

  export default Output;

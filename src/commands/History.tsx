const History = ({ history }: { history: string[] }) => {
    const history_arr = [];
    const temp_history = [...history].reverse();
    for (const [index, value] of temp_history.entries()) {
        const value_arr = value.split(" ");
        const cmd = value_arr[0];
        const args = value_arr.slice(1).join(" ");
        history_arr.push({ id: index, cmd: cmd, args: args });
    }

    return (
        <>
            {history_arr.map((h) => (
                <div key={h.id}>
                    <p className="highlight">{h.cmd}</p> <p>{h.args}</p><br />
                </div>
            ))}
        </>
    );
};

export default History;
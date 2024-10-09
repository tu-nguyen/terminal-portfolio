const History = ({history}: {history: string[]}) => {
    const history_arr = [];
    const temp_history = [...history].reverse()
    for (const [index, value] of temp_history.entries()) {
        console.log(index)
        console.log(value)
        history_arr.push({id: index, history: value})
    }
    
    return (
        <>
        {history_arr.map((h) => (
            <div key={h.id}>
                <p>{h.history}</p><br />
            </div>
        ))}
        </>
    );
};

export default History;
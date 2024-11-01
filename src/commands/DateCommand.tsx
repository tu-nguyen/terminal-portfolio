const DateCommand = () => {
    const dateTime: Date = new Date();

    return <>
    <p>{dateTime.toLocaleString()}</p>
    <br />
    </>
};

export default DateCommand
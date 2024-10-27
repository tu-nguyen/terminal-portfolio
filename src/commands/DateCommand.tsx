const DateCommand = () => {
    const dateTime: Date = new Date();

    return <>
    {dateTime.toLocaleString()}
    <br />
    </>
};

export default DateCommand
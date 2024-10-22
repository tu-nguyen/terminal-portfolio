const DateCommand = () => {
    const dateTime: Date = new Date();

    return <>{dateTime.toLocaleString()}</>
};

export default DateCommand
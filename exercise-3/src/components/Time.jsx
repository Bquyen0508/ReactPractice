function Time() {
    let date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';
    const time = `${hours}:${minutes}:${seconds} ${period}`;
    return(
        <h2>
            {time}
        </h2>
    );
}

export default Time;
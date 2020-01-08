const humanReadable = seconds => {
    let hours = 0;
    let minutes = 0;

    if ( seconds > 359999 ) {
        return 'false argument';
    }

    if ( seconds >= 60 ) {
        minutes = Math.floor( seconds / 60 );
        seconds = minutes * 60 - seconds
        seconds *= -1
    }

    if ( minutes >= 60 ) {
        hours = Math.floor (minutes / 60);
        minutes = hours * 60 - minutes;
        minutes *= -1;
    }

    if ( seconds < 10 ) {
        seconds = '0' + seconds;
    }

    if ( minutes < 10 ) {
        minutes = '0' + minutes;
    }

    if ( hours < 10 ) {
        hours = '0' + hours;
    }

    return `${hours}:${minutes}:${seconds}`
}
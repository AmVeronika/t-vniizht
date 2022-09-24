const convertDay = (str) => {
    if (str) {
        const date = new Date(str);
        const mnth = (`0${date.getMonth() + 1}`).slice(-2);
        const day = (`0${date.getDate()}`).slice(-2);
        return [date.getFullYear(), mnth, day].join('-');
    }
    return null
};
const convertDate = (value, input) => {
    if (value) {
        const date = new Date(value);
        let day = date.getDate();
        if (day.toString().length === 2) {
            day = date.getDate();
        } else {
            day = `0${date.getDate()}`;
        }
        let month = (+date.getMonth() + 1);
        if (month.toString().length === 2) {
            month = date.getMonth() + 1;
        } else {
            month = `0${date.getMonth() + 1}`;
        }
        const hours = date.getHours().toString().length === 2 ? date.getHours() : `0${date.getHours()}`;
        const minutes = date.getMinutes().toString().length === 2 ? date.getMinutes() : `0${date.getMinutes()}`;
        if (!input) {
            return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
        }
        return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}`;

    }
    return null
};

export {convertDay, convertDate};

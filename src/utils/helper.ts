export function numberWithSpaces(x: number | string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.substr(1);
}
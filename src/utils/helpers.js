export const orderAlph = (a, b) => {
    if (a > b) {
        return  1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};

export const searchByName = (array, index) => {
        array.filter(value => value.name.toLowerCase().includes(index))
};
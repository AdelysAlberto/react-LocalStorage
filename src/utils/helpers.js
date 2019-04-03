import _ from "lodash";

export const orderAlph = (a, b) => {
    if (a > b) {
        return  1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};


export const updateStorage = (values) => {
    let existing = JSON.parse(localStorage.getItem('data')) || [];
    //search by id users
    const found=_.find(existing, { 'id':values.id });
    // if found is true, then update the object
    if ( found ){
       Object.assign(found, values);
       localStorage.setItem('data', JSON.stringify(existing));
    } else {
        const uuidv1 = require('uuid/v1');
        const id =uuidv1();
        let add = {...values,id};

        existing.push(add);
        localStorage.setItem('data', JSON.stringify(existing));
    }
};
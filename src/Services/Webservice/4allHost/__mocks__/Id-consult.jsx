import React from 'react';

function getId(props) {
    const id = {
        lista : [
            1 : 'a',
            2 : 4,
            3 : 'das',
            5 : 'things'
        ]
    }

    return new Promise((resolve,reject) => {
        resolve(id)
    });
}

export default getId;

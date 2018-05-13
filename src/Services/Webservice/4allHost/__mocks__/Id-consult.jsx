import React from 'react';

function getId(props) {
    const id = {
        1: 'a',
        2 : 4,
        3 : 'das',
        5 : 'things'
    }

    return new Promise((resolve,reject) => {
        process.nextTick(() => {
            id[2]
                ? resolve(id[2])
                : reject({
                    error: 'Não existe o ID:' + props.id
                });
        });
    });
}

export default getId;

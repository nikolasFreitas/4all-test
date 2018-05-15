import React from 'react';

async function getPlace(props) {
    const url = 'http://dev.4all.com:3003';
    const page = 'tarefa';

    const data = await fetch(`${url}/${page}/${props.id}`);

    if(data.ok) {
        return data.json()
    } else {
        return false
    }

}

export default getPlace

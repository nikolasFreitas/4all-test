async function getId(props) {
    const url = 'http://dev.4all.com:3003';
    const page = 'tarefa';

        const theFetch = await fetch(`${url}/${page}`);

        if (theFetch.ok) {
            return theFetch.json();
        } else {
            return false
        }

}

export default getId;

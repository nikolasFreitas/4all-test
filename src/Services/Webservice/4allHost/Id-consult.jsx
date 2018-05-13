async function getId(props) {
    const url = 'http://dev.4all.com:3003';
    const page = 'tarefa';

    try {
        const theFetch = await fetch(`${url}/${page}`);

        return theFetch.json();
    } catch (err) {
        return false
    }
}

export default getId;

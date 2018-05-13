function getId(props) {
    return Promise.all([fetchingId()]);
}

function fetchingId() {
    const url = 'http://dev.4all.com:3003';
    const page = 'tarefa';
    return fetch(`${url}/${page}`)
            .then(data => data.json())
            .catch(error =>  error)
}
export default getId;

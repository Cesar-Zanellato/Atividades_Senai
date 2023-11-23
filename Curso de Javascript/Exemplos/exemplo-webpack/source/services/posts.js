import axios from "axios";

export const requestComHTTPRequest = () => {
    const HTTP = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts';
    HTTP.open("GET", url);
    HTTP.send();

    HTTP.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            console.log("Retorno do HttpRequest: ", HTTP.responseText);
        }
    }
}

export const requestComFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {}
    }).then(response => response.json())
        .then(json => console.log("Retorno com Fetch:", json));
}

export const requestComAxios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(json => console.log("Resultado com Axios: ", json));
}
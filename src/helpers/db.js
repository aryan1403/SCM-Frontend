import axios from "axios";

const URL = "http://localhost:8080";

export function testapi() {
    return fetch(URL).then(res => res.json()).then(data => {return data.msg});
}

export function addItem(data) {
    return axios.post((URL + "/addItem"), data).then(res => {
        console.log(res.data);
        return res.data.msg;
    });
}

export function updateItem(data) {
    return axios.post((URL + "/updateItem"), data).then(res => {
        console.log(res.data);
        return res.data.msg;
    });
}

export function findItemById(id) {
    return axios.get((URL + "/findItem/"+id)).then(res => {
        return res.data;
    });
}

export function deleteItemById(id) {
    return axios.get((URL + "/deleteItem/"+id)).then(res => {
        return res.data;
    });
}


export function getAllItem() {
    return axios.get((URL + "/getAllItem")).then(res => {
        return res.data[0];
    });
}


export function sendcode(code, num) {
    return axios.get((URL + "/send/"+code+"/"+num));
}


export function sendmsg(num, msg) {
    return axios.get((URL + "/sendmsg/"+num+"/"+msg));
}


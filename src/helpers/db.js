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

export function getAllItem() {
    return axios.get((URL + "/getAllItem")).then(res => {
        return res.data[0];
    });
}
import axios from "axios";

const URL = "http://localhost:8080";

export function testapi() {
    return fetch(URL).then(res => res.json()).then(data => {return data.msg});
}

export function addItem(data) {
    /* fetch((URL + "/addItem"), {
        method: "POST",
        body: JSON.stringify(data),
    }).then(res => res.json()).then(r => {
        console.log(r)
    }); */
    return axios.post((URL + "/addItem"), data).then(res => {
        console.log(res.data);
        return res.data.msg;
    });
    // fetch(URL + "/getAllItem").then(res => res.text()).then(data => console.log(data));
}
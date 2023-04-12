const URL = "http://localhost:8080";

export function testapi() {
    return fetch(URL).then(res => res.json()).then(data => {return data.msg});
}

export function addItem(data) {
    fetch(URL + "/addItem", {
        method: "post",
        body: JSON.stringify(data)
    }).then(res => res.json()).then(r => {
        console.log(r)
    });
}
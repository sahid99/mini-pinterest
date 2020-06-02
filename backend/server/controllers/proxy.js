const fetch = require("node-fetch");
const proxy = {}
const key = '563492ad6f91700001000001d89be03a72b74e48a6aaada752adda4b';
// const baseURL = 'https://api.pexels.com/v1/search?query=';

//Works for getting photos for main page
//Random 
proxy.CuratedList = async () => {
    var options = {
        // These properties are part of the Fetch Standard
        method: 'GET',
        headers: {
            'Authorization': key,
            'Cookie': '__cfduid=d4f8d44257926700aca4ce87e984551771588089554'
          }        // request headers. format is the identical to that accepted by the Headers constructor (see below)
    };
    return await fetch("https://api.pexels.com/v1/curated?per_page=25&page=1", options)
    .then(res => res.json()) // expecting a json response
    .then(json => {return json});
}

 proxy.SearchPin = async (query) =>{
    var options = {
        // These properties are part of the Fetch Standard
        method: 'GET',
        headers: {
            'Authorization': key,
            'Cookie': '__cfduid=d4f8d44257926700aca4ce87e984551771588089554'
          }        // request headers. format is the identical to that accepted by the Headers constructor (see below)
    };

    return await fetch("https://api.pexels.com/v1/search?query="+ query +"&per_page=25&page=1", options)
    .then(res => res.json()) // expecting a json response
    .then(json => {return json});
};
module.exports = proxy;
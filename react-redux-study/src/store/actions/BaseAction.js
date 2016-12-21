import {polyfill} from "es6-promise";
import fetch from "isomorphic-fetch";


const option = {
  timeout: 10000,
};

function objToStr(object){
  let list = [];
  for (var variable in object) {
    list.push(variable+'='+object[variable])
  }
  return list.join("&");
}

export function get(url="", data={}, callback=(json)=>{},errorCallback=(json)=>{}, reducersConnect=(json)=>{},headers){
  const paramsStr = objToStr(data);
  url += paramsStr?"?"+paramsStr:"";
  return dispatch=>{
    return fetch(url, Object.assign({method: "GET",headers:headers?headers:{}},option))
      .then( response => {
        return response.json()
      })
      .then(json=>{
        dispatch(reducersConnect(json));
        callback(json);
      })
      .catch(e=>{
        errorCallback(e);
      })
  }
}

export function post(url="", data={}, callback=(json)=>{},errorCallback=(json)=>{}, reducersConnect=(json)=>{},headers){
  return dispatch=>{
    return fetch(url, Object.assign({method: "POST",body:JSON.stringify(data),headers:headers?headers:{}},option))
      .then( response => {
        return response.json()
      })
      .then(json=>{
        dispatch(reducersConnect(json));
        callback(json);
      })
      .catch(e=>{
        errorCallback(e);
      })
  }
}

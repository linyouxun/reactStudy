// import {polyfill} from "es6-promise";
import fetch from "isomorphic-fetch";
import {get} from "./BaseAction";


export const CLICK_ADD = "clickAdd";

export const clickAddAction = ()=>{
  const url = "api/citylist"
  return get(url,{s:1},(json)=>{
  },(json)=>{
  },(json)=>{
    return {
      type:CLICK_ADD,
      json
    }
  })
};

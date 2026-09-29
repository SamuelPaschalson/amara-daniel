import { useState } from 'react';
export function useLocalStorage(key,initial){const [value,setValue]=useState(()=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):initial}catch{return initial}});const save=(next)=>{const v=typeof next==='function'?next(value):next;setValue(v);try{localStorage.setItem(key,JSON.stringify(v));return true}catch{return false}};return [value,save]}

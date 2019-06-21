'use strict';

export default function checkLocalToken(){
  let localToken = sessionStorage.getItem('localToken');
  return localToken ? localToken : false;
};


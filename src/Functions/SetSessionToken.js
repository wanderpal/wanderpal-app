'use strict';

export default function setLocalToken (token){
  return sessionStorage.setItem('localToken', `${token}`);
};


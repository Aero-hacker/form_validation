import React from 'react'
import { useRef,useState,useEffect } from 'react';
import {faCheck, faTimes, faInfoCircle} from
 "@fortawesome/free-solid-svg-icons";
 import { faFontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,25}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validname,setValidname] = useState(false);
    const [userfocus,setUserfocus] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validpwd,setValidpwd] = useState(false);
    const [pwdfocus,setPwdfocus] = useState(false);

    const [matchpwd,setMatchpwd] = useState('');
    const [validmatch,setValidmatch] = useState(false);
    const [matchfocus,setMatchfocus] = useState(false);

    const [errmsg,setErrmsg] = useState('');
    const [success,setSuccess] = useState(false);


  return (
    <div>
      
    </div>
  )
}

export default Register

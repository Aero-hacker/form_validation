import React from 'react'
import { useRef,useState,useEffect } from 'react';
import {faCheck, faTimes, faInfoCircle} from
 "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon, faFontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    useEffect(() => {
        
    }, [])
    
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidname(result);
    },[user])
     
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidpwd(result);
        const match = pwd == matchpwd;
        setValidmatch(match);
    },[pwd,matchpwd])
     
    useEffect(() => {
       setErrmsg('');
    },[user,pwd,matchpwd])

  return (
    <section>
         <p ref={errRef} className={errmsg? "errmsg":
          "offscreen"} aria-live='assertive'>
          {errmsg}</p>
          <h1>Register</h1>
          <form>
            <label htmlFor='username'>
                username:
                <span className={validname? "valid":"hide"}>
                   <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validname || !user ? "hide" :
                   "invalid"}>
                   <FontAwesomeIcon icon={faTimes}/>

                </span>
            </label>
            <input
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid = {validname? "false":"true"}
                aria-describedby='uidnote'
                onFocus={() => setUserfocus(true)}
                onBlur={() => setUserfocus(false)}
            />
            <p id='uidnote' className={userfocus && user &&
             !validname ? "instructions" : "offscreen"}
            >
                <FontAwesomeIcon icon={faInfoCircle}/>
                 4 to 24 characters. <br/>
                 Must begin with a letter.<br/>
                 Letters, numbers, underscores, hypens allowed.
            </p>

            <label htmlFor="password">
                Password:
                
                <FontAwesomeIcon icon={faCheck} className={validpwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validpwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validpwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdfocus(true)}
                onBlur={() => setPwdfocus(false)}
            />
            <p id="pwdnote" className={pwdfocus && !validpwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
             
            <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <FontAwesomeIcon icon={faCheck} className={validmatch && matchpwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validmatch || !matchpwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchpwd(e.target.value)}
                    value={matchpwd}
                    required
                    aria-invalid={validmatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchfocus(true)}
                    onBlur={() => setMatchfocus(false)}
                />
                <p id="confirmnote" className={matchfocus && !validmatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must match the first password input field.
                </p>

                <button disabled={!validname || !validpwd || !validmatch ? true : false}>Sign Up</button>
            

          </form>
          <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign In</a>
                        </span>
                    </p>

    </section>
  )
}

export default Register

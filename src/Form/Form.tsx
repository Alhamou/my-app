import React, { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";



type User = {
    name: string | undefined;
    username: string | undefined;
}


// const person: User = {name: undefined};

/**
 * My Component for test Form.
 * @param name
 * @param username
 * @constructor
 */
const Form = ()=>{

    const name = useRef<HTMLInputElement>(null)
    const username = useRef<HTMLInputElement>(null)

    const [inputValue, setInputValue] = useState<User>({name: '', username: ''});

    function handleChangeInput(){
        setInputValue({...inputValue, name: name.current?.value, username: username.current?.value})
    }


    function handleSubmitForm(event: FormEvent){
        event.preventDefault()
        console.log(inputValue)
    }


    return(
        <div>
            <form onSubmit={handleSubmitForm} className="m-3">
                <label htmlFor="myInput">Input: </label>
                <input  className="form-control" onChange={handleChangeInput} ref={name} name="name" type="search" id="myInput"/>
                <input  className="form-control" onChange={handleChangeInput} ref={username} name="username" type="search" id="myInput"/>
                <p>Name: {inputValue.name}, Username: {inputValue.username}</p>
                <button className="btn btn-primary" type="submit" >submit</button>
            </form>
            <Link to="/about">go to about</Link>
        </div>
    )
}



export default Form;

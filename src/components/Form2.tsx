import React, { useState } from "react";
import { useForm } from 'react-hook-form';



type User = {
    name: string | undefined;
    username: string | undefined;
}

const person = {

}

// const person: User = {name: undefined};

/**
 * My Component for test Form.
 * @param name
 * @param username
 * @constructor
 */
const Form2 = ()=>{

    const { register, handleSubmit } = useForm<User>()
    const [user, setuser] = useState<User>()

    function onSubmit(dataRes: User) {
        console.log(dataRes)
        setuser({...user, name: dataRes.name, username: dataRes.username})
        return false
    }
    return(
        <div>
            <div className="p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="myInput">Name: </label>
                <input {...register('name')}  className="form-control" type="search"/>
                <label htmlFor="username">Username</label>
                <input {...register('username')} className="form-control" type="search"/>
                <br />
                <button className="btn btn-primary" type="submit" >submit</button>
                <hr />
                <code>
                    {JSON.stringify(user)}
                </code>
            </form>
        </div>
        </div>
    )
}



export default Form2;

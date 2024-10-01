import { useState } from "react";

const SignUpForm = () => {
    //const default
    return (
        <div>
            <h1>Sign up with your email and pasword</h1>
            <form onSubmit={() => { }}>
                <input type="text" placeHolder="Name" required />
                <input type="email" placeHolder="E-mail" required />
                <input type="password" placeHolder="Password" required />
                <input type="password" placeHolder="Confirm Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
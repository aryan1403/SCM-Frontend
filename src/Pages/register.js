import React from 'react'
import { Link } from 'react-router-dom'

import './auth.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <Link to="/readme" target="_blank" rel="noopener noreferrer">terms of service</Link></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p><Link to="/whatslogin">Login/Register with WhatsApp</Link>.</p>
                <footer>
                <p>Already with us <Link to="/login">Login</Link>.</p>
                </footer>
            </form>
        </div>
    )

}
import React from 'react'

export default function Login() {
    return (
        <div className="container mw-100 vh-100">
            <div className="row home1 p-5 h-100">
                <div className="col-2 mx-auto my-auto home2 rounded p-3">
                    <h3 className="text-center">Admin Access</h3>
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Password" aria-label="Password"/>
                    </div>
                    <button className="btn-pc btn-pc-color btn-sm">Login</button>
                </div>
            </div>
        </div>
    )
}

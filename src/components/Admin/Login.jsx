import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from '../../config/api'
import {loginAction} from '../../config/redux/actions'
import Swal from 'sweetalert2'

export default function Login() {
    const status = useSelector(state => state.auth.status)
    const dispatch = useDispatch()

    const userRef = useRef()
    const passRef = useRef()

    const onButtonClick = () => {
        const user = userRef.current.value
        const pass = passRef.current.value

        axios.post('/admin/login', {user, pass})
        .then((res) => {
            if(res.data.length > 0){
                Swal.fire({
                    title: 'Success!',
                    icon: 'success'
                })
                dispatch(loginAction())
            } else {
                Swal.fire(
                    'Error!',
                    'Input data is incorrect.',
                    'error'
                )
            }
        })
    }

    if(status === 0){
        return (
            <div className="container mw-100 vh-100">
                <div className="row home1 p-5 h-100">
                    <div className="col-2 mx-auto my-auto home2 rounded p-3">
                        <h3 className="text-center">Admin Access</h3>
                        <div className="input-group mb-3">
                            <input ref={userRef} type="text" className="form-control" placeholder="Username" aria-label="Username" required/>
                        </div>
                        <div className="input-group mb-3">
                            <input ref={passRef} type="password" className="form-control" placeholder="Password" aria-label="Password" required/>
                        </div>
                        <button className="btn-pc btn-pc-color btn-sm" onClick={onButtonClick}>Login</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mw-100 vh-100">
                <div className="row home1 p-5 h-100">
                    <h1 className="text-center">ADMIN PAGE</h1>
                </div>
            </div>
        )
    }
}

import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from '../../config/api'
import {loginAction} from '../../config/redux/actions'
import Swal from 'sweetalert2'
import '../style.css'

// Components
import ListHome from './ListHome'
import ListProfile from './ListProfile'
import ListMessages from './ListMessages'
import ListSettings from './ListSettings'

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
                <div className="row home1 justify-content-around pt-5rem pb-5 h-100">
                    <div className="col-3 home2 rounded h-50">
                        <div className="list-group my-3" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                            <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                            <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                        </div>
                    </div>
                    <div className="col-8 home2 rounded ">
                        <div className="tab-content my-3" id="nav-tabContent">
                            <ListHome/>
                            <ListProfile/>
                            <ListMessages/>
                            <ListSettings/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

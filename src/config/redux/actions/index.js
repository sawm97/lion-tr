export const loginAction = (data) => {

    localStorage.setItem('admin')
    return { type: 'LOGIN_SUCCESS'}
 }
 
 export const logoutAction = () => {
 
    localStorage.removeItem('admin')
    return { type: 'LOGOUT_SUCCESS'}
 }
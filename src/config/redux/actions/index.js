export const loginAction = () => {
   localStorage.setItem('admin', 1)
   return {type: 'LOGIN_SUCCESS', payload: 1}
}

export const logoutAction = () => {
   localStorage.removeItem('admin')
   return {type: 'LOGOUT_SUCCESS'}
}
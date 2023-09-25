import { API } from "../config"
// register function
export const register = (username,email,password)=>{
let user = {username,email,password}
// contant with backend
return fetch(`${API}/register`,{
    method:"POST",
    headers:{
        Accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify(user)
})
// to get data /response from backend
.then(response=>{return response.json()})
// in case of any error
.catch(error=>{return console.log(error)})
}

export const login = user=>{
    return fetch (`${API}/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
// to keep logged in    
export const authenticate = (data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}

//  to check if logged in or not
export const isAuthenticated =()=>{
    if (localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt')
        )
    }
    else{
        return  false 
    }
}

// email cerification 
export const verifyEmail = (token)=>{
    return fetch(`${API}/verifyEmail/${token}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}  
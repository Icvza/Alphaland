import { API_KEY } from "../../Constants/firebase";
import axios from "axios"


async function userAuth(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(
        url,
        {
            email: email,
            password: password,
            returnSecureToken: true 
        }
    )
    const token = response.data.idToken

    return (token)
}

export function createUser(email, password){
    return userAuth('signUp', email, password)
}

export function loginUser(email, password) {
    return userAuth('signInWithPassword', email, password)
}
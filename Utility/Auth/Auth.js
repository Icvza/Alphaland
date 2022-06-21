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
}

export async function createUser(email, password){
    await userAuth('signUp', email, password)
}

export async function loginUser(email, password) {
    await userAuth('signInWithPassword', email, password)
    console.log('LOGED IN')
}
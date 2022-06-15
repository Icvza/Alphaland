import { API_KEY } from "../../Constants/firebase";
import axios from "axios";

async function CreateUser(email, password){
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]' + API_KEY, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )
}
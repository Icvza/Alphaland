import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../UI/Button'
import Input from  '../UI/Input'

function AuthForm({
    isLogin,
    onSubmit,
    credentialIsInvalid
}) {
    const[inputValue, setuInputValue] =useState({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    })

    const {
        email: emailIsinvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsinvalid,
        confirmPassword: passwordsDontMatch
    } = credentialIsInvalid

    function inputChangedHandler(inputId, enteredvalue) {
        setuInputValue((cu)=>)
    } 
}

import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Input from  '../UI/Input'
import Button from '../UI/Button'

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

    return(
        <View>
            <Text> YOOO </Text>
        </View>
    )
}

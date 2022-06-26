import { View, Text, TextInput, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

function Input({
    label,
    keyboardType,
    secure,
    onUpdateValue,
    value,
    isInvalid,
    }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <View style={styles.inputWrapper}>
                <BlurView intensity={25} style={styles.blur1}>
                    <TextInput
                        style={[styles.input, isInvalid && styles.inputInvalid]}
                        autoCapitalize={'none'}
                        keyboardType={keyboardType}
                        secureTextEntry={secure}
                        onChangeText={onUpdateValue}
                        value={value}
                    />
                </BlurView>
            </View>
        </View>
);
}

export default Input;

const styles = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        height: 45,
        //backgroundColor: "rgba(20, 15, 38, 0.648579)",
        borderRadius: 20,
        overflow: "hidden",
    },
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: 'red',
    },
    input: {
        height: '100%',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 16,
        backgroundColor:'transparent'
    },    
    inputInvalid: {
        backgroundColor: 'red',
    },
});
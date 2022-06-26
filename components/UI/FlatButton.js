import { BlurView } from 'expo-blur';
import { Pressable, StyleSheet, Text, View } from 'react-native'

function FlatButton({children, onPress}){
    return (
        <View style={styles.inputWrapper}>
            <BlurView intensity={25}>
                <Pressable
                    style={({pressed})=> [styles.button, pressed && styles.pressed]}
                    onPress={onPress}
                >
                    <View>
                        <Text style={styles.buttonText}>{children}</Text>
                    </View>
                </Pressable>
            </BlurView>
        </View>
    )
}

export default FlatButton


const styles = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        height: 45,
        //backgroundColor: "rgba(20, 15, 38, 0.648579)",
        borderRadius: 20,
        overflow: "hidden",
    },
    button: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        borderWidth: 2,
        //backgroundColor:'#f4f4f4',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 24,
        width: 250,
        height: 45,
        borderColor: '#C0A587',
        borderWidth: 1
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        //color: '#C0A587',
        color:'white',
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center',
        letterSpacing: 3,
        textTransform: 'uppercase'
    },
});
import { BlurView } from 'expo-blur';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ children, onPress }) {
    return (
        <View style={styles.inputWrapper}>
            <BlurView intensity={25}>
                <Pressable
                    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                    onPress={onPress}
                >
                    <View>
                        <Text style={styles.buttonText}>{children}</Text>
                    </View>
                </Pressable>
                </BlurView>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        height: 45,
        //backgroundColor: "rgba(20, 15, 38, 0.648579)",
        borderRadius: 20,
        overflow: "hidden",
    },
    button: {
        height: 45,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        width: 250,
        borderWidth: 1,
        borderColor: '#C0A587',
        paddingVertical: 6,
        paddingHorizontal: 12,
        elevation: 2,
        shadowColor: 'black',
        backgroundColor:'transparent',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 3,
        textTransform: 'uppercase',
        //fontFamily: 'sans-serif'
    },
});
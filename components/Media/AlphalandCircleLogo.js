
import {Image, StyleSheet} from 'react-native'

function AlphLandCircle() {
    return (
        <Image 
            source={require("../../Constants/Media/alphaland.png")}
            style={styles.Image}
        />
    )
}

export default AlphLandCircle

const styles = StyleSheet.create({
    Image: {
        marginTop: 30,
        borderWidth: 3,
        width: 90,
        height: 90
    }
})
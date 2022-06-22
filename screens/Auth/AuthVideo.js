import React, {useRef, useState}from "react";
import { Video } from 'expo-av'
import {Text, View, StyleSheet} from 'react-native'


function AuthVideo (){

    const video = useRef(null)
    const [status, setStatus] = useState({})

    return(
        <View style = {styles.container}> 
            <Video 
                ref={video}
                style={styles.videoContainer}
                source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
                rate={1}
                shouldPlay={true}
                isLooping={true}
                volume={1}
                muted={true}
                resizeMode="cover"
                onPlaybackStatusUpdate={setStatus}
            />
            <Text style={styles.text}>HELLO</Text>
        </View>
    )
}

export default AuthVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    videoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    
})
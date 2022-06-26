import React from "react";
import { Video } from 'expo-av'
import { StyleSheet, Dimensions, View, Text} from 'react-native'
import { useRef, useState } from 'react';
import styled from "styled-components/native";
const {height} = Dimensions.get("window")

function AuthVideo () {

    const video = useRef(null)
    const [status, setStatus] = useState({}) 

    return(
        <View style={styles.cont}>
            <Video 
                ref={video}
                isLooping={true}
                style={styles.Video}
                source={require('../../Constants/Media/Alphalete.mp4')}
                onPlaybackStatusUpdate={setStatus}
                muted={true}
                //repeat={true}
                shouldPlay={true}
                resizeMode={"cover"}
                //rate={1.0}
                //ignoreSilentSwitch={"obey"}
                //onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <Wrapper>
                <Logo
                    source={require("../../Constants/Media/alphaland.png")}
                    width={50}
                    height={50}
                    resizeMode="contain"
                />
            </Wrapper>

        </View>
    )
}

export const Wrapper = styled.View`
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    flex-direction: column;
`;
export const Logo = styled.Image`
    max-width: 300px;
    width: 300px;
    height: 250px;
`;

export default AuthVideo


const styles = StyleSheet.create({
    cont:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    Video: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
})



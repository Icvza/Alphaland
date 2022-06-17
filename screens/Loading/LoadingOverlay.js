import {View, Text, StyleSheet }from  'react-native'

function LoadingOverlay() {
    return (
        <View style={styles.LoadingOverlayContainer}>
            <Text>LOADING</Text>
        </View>
    )
}

export default LoadingOverlay

styles = StyleSheet.create({
    LoadingOverlayContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
    }
})
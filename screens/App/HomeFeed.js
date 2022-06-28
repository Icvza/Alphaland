import {View, Text, StyleSheet } from 'react-native'

function HomeFeed(){
     return( 
     <View style={styles.HomeFeedContainer}>
          <Text>WELCOME SCREE</Text>
     </View>
     )
}

export default HomeFeed

const styles = StyleSheet.create({
     HomeFeedContainer: {
          alignContent: 'center',
          justifyContent: 'center'
     }
})
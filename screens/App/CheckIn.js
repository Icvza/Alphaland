import { View, StyleSheet, Text} from 'react-native'

function CheckIn() {
     return (
          <View style={styles.CheckInContainer}>
               <Text>Check in Tab</Text>
          </View>
     )
}

export default CheckIn 

const styles = StyleSheet.create({
     CheckInContainer: {
          flex: 1,
          justifyContent: 'center'
     }
})


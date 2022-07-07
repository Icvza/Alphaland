import { StyleSheet, View } from 'react-native'
import ClassesList from '../Classes/ClassesList'
import { CLASSES } from '../../DummyData'
function UpcomingClasses ({Classes}){
     console.log(Classes)
     return(
          <View style={styles.container}>
               <ClassesList Classes={CLASSES}></ClassesList>
          </View>
     )

}
export default UpcomingClasses

const styles = StyleSheet.create({
     container: {
          padding: 24,
          flexGrow: 1
     }, 
})
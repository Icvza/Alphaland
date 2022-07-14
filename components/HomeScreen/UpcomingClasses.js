import { StyleSheet, View } from 'react-native'
import ClassesList from '../Classes/ClassesList'
import PersonalTrainingList from '../PersonalTraining/PersonalTrainList'
import { CLASSES, PERSONALTRAINING } from '../../DummyData'

function UpcomingClasses ({Classes, Sessions}){
     return(
          <View style={styles.container}>
               <ClassesList Classes={CLASSES}></ClassesList>
               <PersonalTrainingList Sessions={PERSONALTRAINING}></PersonalTrainingList>
          </View>
     )

}
export default UpcomingClasses

const styles = StyleSheet.create({
     container: {
          padding:5,
          alignContent: 'center',
          //borderWidth: 2,
          //borderColor: 'green'
     }, 
})
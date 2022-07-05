import { StyleSheet } from 'react-native'
import ClassesList from '../Classes/ClassesList'
import { Classes } from '../../DummyData'

function UpcomingClasses ({Classes}){
     console.log(Classes)
     return(
          <ClassesList Classes={Classes}></ClassesList>
     )

}
export default UpcomingClasses

const styles = StyleSheet.create({

})
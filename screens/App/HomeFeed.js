import {View, Dimensions, StyleSheet, ImageBackground, Text, Button} from 'react-native'
import CalendarSnippet from '../../components/HomeScreen/CalendarSnippet'
import FeaturedMeal from '../../components/HomeScreen/FeaturedMeal'
import UpcomingClasses from '../../components/HomeScreen/UpcomingClasses'
import { Classes } from '../../DummyData'
import { GlobalStyles } from '../../Constants/colors'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height*0.36

function Greeting(){
     return (
          <View style={styles.ImageContainer}>
               <ImageBackground 
                    style={styles.Image}
                    source={require('../../Constants/Media/HomeScreen.jpg')}
               >
                    <Text style={styles.GreetingText}> Good Afternoon, Isaac</Text>
               </ImageBackground>
          </View>
     )
}

function HomeFeed(){
     console.log(Classes)
     return (
          <View style={styles.HomeFeedContainer}>
               <Greeting />
               <CalendarSnippet style={styles.calendar}/>
               <UpcomingClasses />
               <FeaturedMeal />
          </View>
     )
}

export default HomeFeed

const styles = StyleSheet.create({
     HomeFeedContainer: {
          flex: 1,
          backgroundColor: GlobalStyles.colors.secondaryColor
     },
     ImageContainer:{
          borderRadius: 6, 
          elevation: 3,
          shadowColor: 'blue',
          shadowRadius: 4,
          shadowOffset: { width: 1, height: 2},
          shadowOpacity: 0.4,
     },
     Image: {
          height: height,
          width: width,
          justifyContent: 'flex-end',
     },
     GreetingText:{
          color: 'white',
          textAlign: 'center',
          alignSelf: 'flex-start',
          padding: 10,
          marginBottom: 40,
          fontSize: 20
     },
     calendar: {
          borderWidth: 3,
          borderColor: 'green'
     }
})


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
                    source={require('../../Constants/Media/bkroung.jpeg')}
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
          backgroundColor: GlobalStyles.homeFeed.bgc,
          borderColor: 'black'
     },
     ImageContainer:{
          elevation: 3,
          shadowColor: GlobalStyles.colors.shadow,
          shadowRadius: 4,
          shadowOffset: { width: 1, height: 2},
          shadowOpacity: 0.4,
          overflow:'hidden',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
     },
     Image: {
          height: height,
          width: width,
          justifyContent: 'flex-end',
          borderBottomLeftRadius: 50,

     },
     GreetingText:{
          color: 'white',
          textAlign: 'center',
          alignSelf: 'flex-start',
          padding: 10,
          marginBottom: 40,
          fontSize: 40,
          fontFamily: 'bebas-Neue',
          color: GlobalStyles.colors.primaryColor
     },
     calendar: {
          borderWidth: 3,
          borderColor: 'green'
     }
})


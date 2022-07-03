import {View, Dimensions, StyleSheet, ImageBackground, Text, Button} from 'react-native'
import CalendarSnippet from '../../components/HomeScreen/CalendarSnippet'
import FeaturedMeal from '../../components/HomeScreen/FeaturedMeal'
import UpcomingClasses from '../../components/HomeScreen/UpcomingClasses'

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
     return (
          <View style={styles.HomeFeedContainer}>
               <Greeting />
               <CalendarSnippet />
               <UpcomingClasses />
               <FeaturedMeal />
          </View>
     )
}

export default HomeFeed

const styles = StyleSheet.create({
     HomeFeedContainer: {
          flex: 1,
          backgroundColor: 'green',
          borderWidth: 2,
          borderColor:'yellow',
     },
     ImageContainer:{
          borderWidth: 3,
          borderColor: 'pink',
     },
     Image: {
          height: height,
          width: width,
          justifyContent: 'flex-end',
     },
     GreetingText:{
          color: 'white',
          textAlign: 'center',
          borderWidth: 3,
          borderColor: 'blue',
          alignSelf: 'flex-start',
          padding: 15,
          fontSize: 20
     }
})


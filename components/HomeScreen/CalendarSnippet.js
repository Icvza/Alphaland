import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import {Dimensions} from 'react-native'
import { GlobalStyles } from '../../Constants/colors'
import { View, StyleSheet, Text} from 'react-native'
//const width = Dimensions.get('window').width*0.96
const width = Dimensions.get('window').width
function CalendarSnippet() {
     return(
          <View style={styles.container}>
               <CalendarStrip
                    calendarHeaderStyle={{color: 'black',}}
                    dateNumberStyle={{color: 'black'}}
                    dateNameStyle={{color: 'black'}}
                    highlightDateNumberStyle={{color: 'black'}}
                    highlightDateNameStyle={{color: 'black'}}
                    selectedDate={moment()}
                    scrollable={true}
                    daySelectionAnimation={{
                         type: 'border',
                         borderHighlightColor: GlobalStyles.cal.selectedDay,
                         borderWidth: 2,
               }}
               style={{
                    width: width,
                    height:90, 
                    padding: 10,
                    fontColor: 'white',
                    backgroundColor: GlobalStyles.colors.tertiaryColor,
                    alignSelf: 'center',
                    borderRadius: 20
               }} 
               />
          </View>
     )
}

export default CalendarSnippet

const styles = StyleSheet.create({
     container: {
          padding: 7,
          color: 'white'
     }
})
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import {Dimensions} from 'react-native'
import { GlobalStyles } from '../../Constants/colors'
import { View, StyleSheet, Text} from 'react-native'
const width = Dimensions.get('window').width*0.96
function CalendarSnippet() {
     return(
          <View style={styles.container}>
               <CalendarStrip
                    calendarHeaderStyle={{color: 'white'}}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    highlightDateNumberStyle={{color: 'green'}}
                    highlightDateNameStyle={{color: 'green'}}
                    selectedDate={moment()}
                    scrollable={true}
                    daySelectionAnimation={{
                         type: 'border',
                         borderHighlightColor: 'gray',
                         borderWidth: 2    
               }}
               style={{
                    width: width,
                    height:80, 
                    paddingTop: 10,
                    fontColor: 'white',
                    paddingBottom: 10,
                    backgroundColor: GlobalStyles.colors.tertiaryColor,
                    borderRadius: 20,
                    alignSelf: 'center'
               }} 
               />
          </View>
     )
}

export default CalendarSnippet

const styles = StyleSheet.create({
     container: {
          padding: 12,
          color: 'white'
     }
})
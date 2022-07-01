import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment'
import {Dimensions} from 'react-native'
const width = Dimensions.get('window').width*0.96
function CalendarSnippet() {
     return(
          <CalendarStrip
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
               paddingBottom: 10,
               backgroundColor: 'white',
               borderRadius: 20,
               alignSelf: 'center'
          }} 
     />
     )
}

export default CalendarSnippet
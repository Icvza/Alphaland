import {View, Text, StyleSheet } from 'react-native'
import { Avatar, IconButton, Card, Button } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../Constants/colors'

function Personal ({id, time }){

     function CardTitle (input){
          return(
               <Text style={{fontSize: 16}}>{input}</Text>
          )
     }

     return(
          <View style={styles.ClassMainCont}>
               <Card
               style={styles.ClassContainer}
               mode={'elevated'}
               elevation={3}
               >
                    <Card.Title
                         style={styles.Title}
                         title={CardTitle(id)}
                         subtitle={id + ' Tuesday 3:30Pm'}
                         left={(props) => <Avatar.Icon {...props} icon="account-multiple" style={styles.AvatarIcon}/>}
                         right={(props) => <Card.Actions 
                                                  style={styles.ActionContainer}>
                                             <Button 
                                                  style={styles.Button}
                                                  mode='contained'>{<EvilIcons name='calendar' size={27} />}
                                             </Button>
                                             <Button> <Text style={styles.textButton}>ok</Text> </Button>
                                        </Card.Actions>}
                    />
               </Card>
          </View>
     )

}

export default Personal

const styles = StyleSheet.create({
     ClassMainCont: {
          alignItems: 'center'
     },
     ClassContainer: {
          width: '95%',
          borderRadius: 100, 
          elevation: 3,
          shadowColor: GlobalStyles.colors.shadow,
          shadowRadius: 4,
          shadowOffset: { width: 1, height: 2},
          shadowOpacity: 0.4, 
          justifyContent:  'space-between',
          alignContent: 'flex-end',
          flexDirection: 'row',
          padding: 0,
          marginVertical: 8 ,
          backgroundColor: GlobalStyles.colors.secondaryColor,
          flexDirection: "row",
          justifyContent: 'space-between',
     },
     ActionContainer: {
          
     },
     Button:{
          backgroundColor: GlobalStyles.colors.tertiaryColor
     },
     textButton:{
          color: GlobalStyles.colors.tertiaryColor        
     },
     AvatarIcon:{
          backgroundColor: GlobalStyles.colors.tertiaryColor
     },
});
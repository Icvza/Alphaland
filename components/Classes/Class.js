import {View, Text, StyleSheet } from 'react-native'
import { Avatar, IconButton, Card, Button } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../Constants/colors'
function Class ({id, category, instructors }){

     function CardTitle (input){
          return(
               <Text style={{fontSize: 9}}>{input}</Text>
          )
     }

     return(
          <View>
               <Card
               style={styles.ClassContainer}
               mode={'elevated'}
               elevation={3}
               >
                    <Card.Title
                         style={styles.Title}
                         title={CardTitle(category)}
                         subtitle={id}
                         left={(props) => <Avatar.Icon {...props} icon="account-group" />}
                         right={(props) => <Card.Actions 
                                                  style={styles.ActionContainer}>
                                             <Button 
                                                  style={styles.Button}
                                                  mode='contained'>{<EvilIcons name='calendar' size={27} />}
                                             </Button>
                                             <Button style={styles.Button}></Button>
                                        </Card.Actions>}
                    />
               </Card>
          </View>
     )

}

export default Class 

const styles = StyleSheet.create({
     ClassContainer: {
          justifyContent:  'space-between',
          alignContent: 'flex-end',
          flexDirection: 'row',
          padding: 12,
          marginVertical: 8 ,
          backgroundColor: GlobalStyles.colors.secondaryColor,
          flexDirection: "row",
          justifyContent: 'space-between',
     },
     ActionContainer: {
          
     },
     Button:{
          
     }
});
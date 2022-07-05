import {View, Text, StyleSheet } from 'react-native'
import { Avatar, IconButton, Card, Button } from 'react-native-paper'


function Class ({id, category, instructors }){

     return(
          <Card>
               <Card.Title
                    title={category}
                    subtitle={id}
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
               />
               <Card.Actions>
                    <Button mode='contained'>Cancel</Button>
                    <Button>Ok</Button>
               </Card.Actions>
          </Card>
     )

}

export default Class 

const styles = StyleSheet.create({

})
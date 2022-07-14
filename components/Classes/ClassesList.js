import {FlatList, View} from 'react-native'
import Class from '../Classes/Class'

function RenderClasses(itemData) {
    return (
        <Class {...itemData.item} />
    )

}


function ClassesList({Classes}){
    return (
        <FlatList
            //style={{borderWidth: 3, flexDirection: 'grow'}}
            data={Classes}
            renderItem={RenderClasses}
        />

    )
}

export default ClassesList


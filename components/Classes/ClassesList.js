import {FlatList} from 'react-native'
import Class from '../Classes/Class'




function RenderClasses(itemData) {
    console.log(itemData)
    return (
        <Class {...itemData.item} />
    )

}


function ClassesList({Classes}){
    return (
        <FlatList 
            style={{borderWidth: 4, borderColor: 'pink'}}
            data={Classes}
            renderItem={RenderClasses}
        />
    )
}

export default ClassesList
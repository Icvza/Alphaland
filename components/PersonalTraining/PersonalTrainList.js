import {FlatList, View} from 'react-native'
import Personal from './Personal'

function RenderPersonalTrainingList(itemData) {
    return (
        <Personal {...itemData.item} />
    )

}

function PersonalTrainingList({Sessions}){
    return (
        <FlatList
            data={Sessions}
            renderItem={RenderPersonalTrainingList}
        />
    )
}

export default PersonalTrainingList

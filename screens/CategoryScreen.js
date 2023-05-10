import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

function CategoryScreen({navigation}) {
    const onPressHundler = ()=>{
        navigation.navigate('MealsScreen')
    }

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}
            renderItem={(item)=><CategoryGridTile title={item.item.title} color={item.item.color} pressHundler={onPressHundler}/>}
            numColumns={2}
            style={{backgroundColor: '#24180f'}}
        />
    );
}

export default CategoryScreen;
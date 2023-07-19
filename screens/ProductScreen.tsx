import { StyleSheet, View } from "react-native";
import {Input, List} from '../components'

export function ProductScreen() {
    return (
        <View style={styles.container}>
            <Input />
            <List />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#34495e'
    }
})
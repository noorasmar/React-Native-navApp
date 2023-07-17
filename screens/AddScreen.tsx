import { Button, StyleSheet, View } from "react-native";
import { useMutation } from "react-query";
import { createProduct, updateProduct, deleteProduct} from '../api/api'
import { Product } from '../interfaces/Product';

export function AddScreen(): JSX.Element {
    const add = useMutation(createProduct)
    const update = useMutation(updateProduct)
    const remove = useMutation(deleteProduct)

    const handleAddPress = () => {
        const newItem: Product = { id: 1, title: "dadas", price: 0, category: "" }
        add.mutate(newItem);
    };
    const handleUpdatePress = () => {
        const newItem: Product = { id: 10, title: "new Title", price: 0, category: "" }
        update.mutate(newItem);
    };
    const handleDeletePress = () => {
        const newItem: Product = { id: 10, title: "dadas", price: 0, category: "" }
        remove.mutate(newItem);
    };

    return (
        <View style={styles.container}>
            <Button
                title="Add"
                onPress={handleAddPress}
            />
            <Button
                title="Update"
                onPress={handleUpdatePress}
            />
            <Button
                title="Delete"
                onPress={handleDeletePress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        gap: 10
    }
})
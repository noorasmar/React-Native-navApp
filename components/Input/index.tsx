import { useState } from "react";
import { Button, StyleSheet, Text, View, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useMutation, useQueryClient } from 'react-query';
import { Product } from '../../interfaces/Product';
import { createProduct } from '../../api/api'

export function Input(): JSX.Element {
    const [productName, setProductName] = useState<string>('');
    const queryClient = useQueryClient();
    const add = useMutation(createProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    })

    const handleAddProduct = () => {
        Keyboard.dismiss();
        if(productName !== ""){
            const Item: Product = { id: 1, title: productName, price: 0, category: "" }
            add.mutate(Item);
            setProductName('');
        }
    };
    
    return (
        <View>
            <TextInput
                placeholder="Enter product name"
                value={productName}
                onChangeText={text => setProductName(text)}
                style={styles.textInput}
            />
            <Button title="Add" onPress={handleAddProduct} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 15,
        marginBottom: 10
    }
})
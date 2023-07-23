import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useMutation, useQueryClient } from 'react-query';
import { Product } from '../../interfaces/Product';
import { updateProduct } from '../../api/api'

export function EditInput({ idItem, titleItem, visible, onClose }: { idItem: number, titleItem: string, visible: boolean, onClose: (flag: boolean) => void }): JSX.Element {
    const [productName, setProductName] = useState<string>('');
    const queryClient = useQueryClient();
    
    const update = useMutation(updateProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    })

    const handleUpdateProduct = () => {
        Keyboard.dismiss();
        if (productName !== "") {
            const Item: Product = { id: idItem, title: productName, price: 0, category: "" }
            update.mutate(Item);
            setProductName('');
            handleClose()
        }
    };

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        placeholder="Enter new product name"
                        value={productName}
                        onChangeText={text => setProductName(text)}
                        style={styles.textInput}
                    />
                    <View style={styles.btnGroup}>
                        <Button title={'Update'} onPress={handleUpdateProduct} />
                        <Button title={'Close'} onPress={handleClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%'
    },
    textInput: {
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 15,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 2
    },
    btnGroup:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
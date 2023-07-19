import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from '../../api/api'
import { EditInput } from "../EditInput";
import { useState } from "react";

export function Items({ id, title }: { id: number, title: string }): JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const queryClient = useQueryClient();
    const remove = useMutation(deleteProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    })

    const handleEditItem = () => {
        setIsModalVisible(true)
    }

    const handleDeleteItem = () => {
        const num: Number = id
        remove.mutate(num);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.editButton} onPress={handleEditItem}>
                    <Text style={styles.deleteButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteItem}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
            <EditInput
                idItem={id}
                titleItem={title}
                visible={isModalVisible}
                onClose={setIsModalVisible}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '800'
    },
    buttonGroup: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    editButton: {
        backgroundColor: '#2ecc71',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Product } from '../interfaces/Product';
import { Item } from '../components';
import { useQuery } from 'react-query';
import {fetchProduct} from '../api/api'

export function HomeScreen(): JSX.Element {
    // const [product, setProduct] = useState<Array<Product> | null>(null);
    const { data, isLoading, isError, error } = useQuery<Product[]>('product', fetchProduct);

    if (isLoading || !data) {
        return <Text>Loading...</Text>;
    }

    if (isError) {
        return <Text>Error:</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            {
                data.map((el) => {
                    return (
                        <Item
                            key={el.id}
                            title={el.title}
                        />
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'red'
    }
})
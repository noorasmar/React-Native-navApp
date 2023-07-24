import { StyleSheet, Text, View } from "react-native";
import { useQuery } from 'react-query';
import { fetchProduct } from '../../api/api'
import { Product } from '../../interfaces/Product';
import { Items } from "../Items";
import { ScrollView } from "react-native-gesture-handler";

export function List(): JSX.Element {
    const { data, isLoading, isError, error } = useQuery<Product[] | null>(['product', 5], fetchProduct);

    if (isLoading || !data) {
        return <Text>Loading...</Text>;
    }

    if (isError) {
        return <Text>Error:</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            {
                data.reverse().map((el) => {
                    return (
                        <Items
                            key={el.id}
                            id={el.id}
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
        marginTop: 20,
    }
})
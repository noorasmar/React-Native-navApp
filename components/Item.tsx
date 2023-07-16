import { StyleSheet, Text, View } from "react-native";

export function Item({title}: {title: string}): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        padding: 10,
        marginBottom: 5
    }
})
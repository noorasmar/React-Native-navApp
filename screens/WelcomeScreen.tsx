import { StyleSheet, Text, View, Button } from 'react-native';

export function WelcomeScreen({ navigation }: any): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>
                Welcome Screen
            </Text>
            <Button
                title="Fetch Product"
                onPress={() =>
                    navigation.navigate('HomeScreen')
                }
            />
            <Button
                title="Mutation"
                onPress={() =>
                    navigation.navigate('AddScreen')
                }
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
        backgroundColor: 'blue',
        gap: 10
    }
})
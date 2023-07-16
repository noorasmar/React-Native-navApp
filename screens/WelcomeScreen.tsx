import { StyleSheet, Text, View, Button } from 'react-native';

export function WelcomeScreen({ navigation }: any): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>
                Welcome Screen
            </Text>
            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('HomeScreen')
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
        backgroundColor: 'blue'
    }
})
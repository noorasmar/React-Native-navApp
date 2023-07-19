import { StyleSheet, Text, View, Button } from 'react-native';

export function WelcomeScreen({ navigation }: any): JSX.Element {
    return (
        <View style={styles.container}>
            <Text>
                Welcome Screen
            </Text>
            <Button
                title="Products"
                onPress={() =>
                    navigation.navigate('ProductScreen')
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
        backgroundColor: '#34495e',
        gap: 10
    }
})
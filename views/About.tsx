import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button } from 'react-native-paper';


export default function About ({ navigation }) {
    const _handleMore = () => console.log('Shown more');
    return (
        <SafeAreaView>
            <div style={{marginBottom: "30px"}}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                    <Appbar.Content title="About" subtitle="About Subtitle" />
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
            </div>
            <div style={{margin: "0 20px"}}>
                <Text>About </Text>
            </div>
        </SafeAreaView>
    );
}
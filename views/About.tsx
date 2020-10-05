import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button } from 'react-native-paper';
import { useDrawerMenuStore } from "./../stores"
import styles from "./../styles"
import DrawerMenu from "./../components/DrawerMenu"


export default function About ({ navigation }) {
    const toggleMenu = useDrawerMenuStore(store => store.toggleMenu);

    return (
        <SafeAreaView>
            <DrawerMenu {...navigation}></DrawerMenu>
            <View style={styles.mb_3}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                    <Appbar.Content title="About" subtitle="About Subtitle" />
                    <Appbar.Action icon="menu" onPress={toggleMenu} />
                </Appbar.Header>
            </View>
            <View style={[styles.mx_4]}>
                <Text>About </Text>
            </View>
        </SafeAreaView>
    );
}
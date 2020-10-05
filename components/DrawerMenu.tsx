import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Drawer, Appbar } from 'react-native-paper';
import { useDrawerMenuStore } from "./../stores"
import styles from "./../styles"


export default function DrawerMenu ({ navigation }) {
    const showDrawer = useDrawerMenuStore(store => store.showDrawer);
    const toggleMenu = useDrawerMenuStore(store => store.toggleMenu);
    const active = useDrawerMenuStore(store => store.active);
    const setActive = useDrawerMenuStore(store => store.setActive);

    return (
        <>
            { (showDrawer) &&
                <View style={styles.containerMenu}>
                    <TouchableOpacity  style={styles.bgMenu} onPress={toggleMenu}></TouchableOpacity>
                    <View style={styles.menu}>
                        <Drawer.Section title="Some title">
                            <Drawer.Item
                                label="First Item"
                                active={active === 'first'}
                                onPress={() => setActive('first')}
                            />
                            <Drawer.Item
                                label="Second Item"
                                active={active === 'second'}
                                onPress={() => setActive('second')}
                            />
                        </Drawer.Section>
                    </View>
                </View>
            }
        </>
    );
}
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, Card, Title, Paragraph, Avatar, Drawer } from 'react-native-paper';
import { useUsersStore, useDrawerMenuStore } from "./../stores"
import styles from "./../styles"
import DrawerMenu from "./../components/DrawerMenu"


export default function Home({ navigation }) {
    const user = useUsersStore(store => store.user);
    const getUser = useUsersStore(store => store.getUser);
    const toggleMenu = useDrawerMenuStore(store => store.toggleMenu);


    useEffect(() => {
        (async function () {
            await getUser(1);
        })();
    }, []);

    return (
        <SafeAreaView>
            <DrawerMenu {...navigation}></DrawerMenu>

            <View style={styles.mb_3}>
                <Appbar.Header>
                    <Appbar.Content title="Home" subtitle="Home Subtitle" />
                    <Appbar.Action icon="information" onPress={() => navigation.navigate('About')}></Appbar.Action>
                    <Appbar.Action icon="menu" onPress={toggleMenu} />                    
                </Appbar.Header>
            </View>

            <View style={[styles.mx_4]}>
                <Button icon="home" mode="contained" onPress={() => navigation.navigate('About')}>About</Button>

                <Card style={styles.mt_4}>
                    {(user) && <Card.Title title={user?.Name} subtitle={user?.LastName} left={(props) => <Avatar.Image {...props} size={48} source={{ uri: user?.Image }} />} />}
                    <Card.Cover source={{ uri: 'https://picsum.photos/id/1011/700' }} />
                    <Card.Actions>
                        <Button onPress={() => console.log("press cancel")}>Cancel</Button>
                        <Button onPress={() => console.log("press ok")}>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>

            
        </SafeAreaView>
    );
}
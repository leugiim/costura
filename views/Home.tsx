import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { useUsersStore } from "./../stores"
import styles from "./../styles"


export default function Home ({ navigation }) {
    const _handleMore = () => console.log('Shown more');
    const user = useUsersStore(store => store.user);
    const getUser = useUsersStore(store => store.getUser);
    useEffect(() => {
        (async function(){
            await getUser(1);
        })(); 
    }, []);
    
    return (
        <SafeAreaView>
            <View style={styles.mb_3}>
                <Appbar.Header>
                    <Appbar.Content title="Home" subtitle="Home Subtitle" />
                    <Appbar.Action icon="information" onPress={() => navigation.navigate('About')}></Appbar.Action>
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
            </View>

            <View style={[styles.mx_4]}>
                <Text>Test</Text>
                <Button icon="home" mode="contained" onPress={() => navigation.navigate('About')}>About</Button>
                        
                <Card style={styles.mt_4}>
                    { (user) && <Card.Title title={user?.Name} subtitle={user?.LastName} left={(props) => <Avatar.Image {...props} size={48} source={{ uri: user?.Image }} />} /> }
                    {/* <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>{user?.Name}</Paragraph>
                    </Card.Content> */}
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
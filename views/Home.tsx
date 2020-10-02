import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';


export default function Home ({ navigation }) {
    const _handleMore = () => console.log('Shown more');
    const LeftContent = (props: object) => <Avatar.Icon {...props} icon="folder" />
    return (
        <SafeAreaView>
            <div style={{marginBottom: "30px"}}>
                <Appbar.Header>
                    <Appbar.Content title="Home" subtitle="Home Subtitle" />
                    <Appbar.Action icon="information" onPress={() => navigation.navigate('About')}></Appbar.Action>
                    <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                </Appbar.Header>
            </div>

            <div style={{margin: "0 20px"}}>
            <Button icon="home" mode="contained" onPress={() => navigation.navigate('About')}>About</Button>
                    
            <Card style={{marginTop: "20px"}}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            </div>
        </SafeAreaView>
    );
}
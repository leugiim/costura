import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


function HomeScreen({ navigation }) {
  
  const LeftContent = (props: object) => <Avatar.Icon {...props} icon="folder" />
  return (
    <SafeAreaView>
      <Text>Home Screeen</Text>      
      
      <Link to="/About"><Button icon="camera" mode="contained">About</Button></Link>

      <Button icon="home" mode="contained" onPress={() => navigation.navigate('About')}>About</Button>
      
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>Card titlee</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </SafeAreaView>
  );
}
function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

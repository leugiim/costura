import 'react-native-gesture-handler';
import React from 'react';
import { Text, View  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, BottomNavigation } from 'react-native-paper';
import styles from "./../styles"

import Cuadrada from "./Cuadrada"
import Redonda from "./Redonda"
const EmptyRoute = () => <></>;

export default function Home({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'cuadrada', title: 'Enagüilla cuadrada', icon: 'square' },
        { key: 'redonda', title: 'Enagüilla redonda', icon: 'checkbox-blank-circle' },
        { key: 'colcha', title: 'Colcha', icon: 'bed-empty' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        cuadrada: EmptyRoute,
        redonda: EmptyRoute,
        colcha: EmptyRoute,
    });

    return (
        <SafeAreaView style={styles.body}>
            <Appbar.Header>
                <Appbar.Content title="Calcula los metros de tela" />
            </Appbar.Header>

            { (index === 0) && <Cuadrada {...navigation} /> }
            { (index === 1) && <Redonda {...navigation} /> }
            { (index === 2) && <Cuadrada {...navigation} /> }

            <BottomNavigation style={styles.bottomNavigation}
                shifting={true}
                navigationState={{ index, routes }} 
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
            
        </SafeAreaView>
    );
}
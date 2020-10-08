import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Title, Paragraph, Button, TextInput, HelperText, Card } from 'react-native-paper';
import styles from './../styles'


export default function Cuadrada ({ navigation }) {
    const [showResult, setShowResult] = React.useState(false);
    const [showError, setShowError] = React.useState(false);

    const [largo, setLargo] = React.useState('');
    const [ancho, setAncho] = React.useState('');
    const [alto, setAlto] = React.useState('');
    const [anchoTela, setAnchoTela] = React.useState('');

    const [perimetro, setPerimetro] = React.useState(0);
    const [piezas, setPiezas] = React.useState(0);
    const [metros, setMetros] = React.useState(0);
    const [showAlert, setShowAlert] =  React.useState(false);

    const calcular = () =>{

        if(isNaN(parseFloat(largo)) || isNaN(parseFloat(ancho)) || isNaN(parseFloat(alto)) || isNaN(parseFloat(anchoTela))) {
            setShowError(true);
        } else {
            setShowError(false);
            
            setLargo(parseFloat(largo)+'');
            setAncho(parseFloat(ancho)+'');
            setAlto(parseFloat(alto)+'');

            const perimetro = (parseFloat(largo) + parseFloat(ancho)) * 2;
            const piezasAux = Math.ceil(parseFloat(((perimetro * 3) / parseFloat(anchoTela)).toFixed(2)));
            const piezas = Math.ceil(parseFloat(((perimetro * 3) / parseFloat(anchoTela)).toFixed(2)) - 0.25);
            const metros = parseFloat((piezas * (parseFloat(alto) + 0.12)).toFixed(2));

            setShowAlert(piezasAux > piezas);

            setPerimetro(perimetro);
            setPiezas(piezas);
            setMetros(metros);

            setShowResult(true);
        }
    }

    const validateValue = (value, funct) => {
        if(!isNaN(parseFloat(value))){
            const lastCharacter = (value.substr(value.length - 1) === '.') ? '.' : '';
            funct(parseFloat(value) + lastCharacter);
        }
    }

    const onDismissSnackBar = () => {}

    return (
        <View style={styles.viewContainer}>
            <View>
                <Text style={styles.mb_2}>Inserta todos los valores en metros.</Text>
                <TextInput style={styles.mb_2}
                    label="Largo"
                    value={largo}
                    onChangeText={largo => setLargo(largo)}
                />
                <TextInput style={styles.mb_2}
                    label="Ancho"
                    value={ancho}
                    onChangeText={ancho => setAncho(ancho)}
                />
                <TextInput style={styles.mb_2}
                    label="Alto"
                    value={alto}
                    onChangeText={alto => setAlto(alto)}
                />
                <TextInput style={styles.mb_2}
                    label="Ancho de la tela"
                    value={anchoTela}
                    onChangeText={anchoTela => setAnchoTela(anchoTela)}
                />
                <Button icon="content-cut" mode="contained" onPress={calcular}>
                    Calcular
                </Button>
                <HelperText type="error" visible={showError} style={{fontSize: 16, ...styles.pl_0, ...styles.pt_2}}>
                    Debes insertar medidas numéricas en metros.
                </HelperText>
            </View>
            {(showResult) && <View>
                
                <HelperText type="error" visible={showAlert} style={{fontSize: 16, ...styles.pl_0, ...styles.pt_2}}>
                    Se han quitado unos centimetros para que haya que comprar menos tela.
                </HelperText>
                
                <View style={styles.row}>
                    <View style={[styles.column, styles.m_2]}>
                        <Card>
                            <Card.Content>
                                <Title>{perimetro}</Title>
                                <Paragraph>Metros de perímetro</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={[styles.column, styles.m_2]}>
                        <Card>
                            <Card.Content>
                                <Title>{piezas}</Title>
                                <Paragraph>Piezas</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
                
                <View style={styles.row}>
                    <View style={[styles.column, styles.m_2]}>
                        <Card>
                            <Card.Content>
                                <Title>{metros}</Title>
                                <Paragraph>Metros sin tapete</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={[styles.column, styles.m_2]}>
                        <Card>
                            <Card.Content>
                                <Title>{metros + 1}</Title>
                                <Paragraph>Metros con tapete</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </View> }
        </View>
    );
}
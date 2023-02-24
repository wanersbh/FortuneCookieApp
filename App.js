import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function App() {

    const [img, setImg] = useState(require('./src/cookie.png'));
    const [textoFrase, setTextoFrase] = useState('');

    let frases = [
        'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
        'Acredite em si mesmo e em seu potencial ilimitado.',
        'Não deixe o medo impedir você de alcançar seus sonhos.',
        'A determinação é a chave para superar qualquer obstáculo.',
        'A vida é um desafio constante, mas a persistência é a chave para a vitória.',
        'Se você quer alcançar algo que nunca alcançou, precisa fazer algo que nunca fez.',
        'Acredite que você é capaz e nada será impossível para você.',
        'O fracasso é apenas uma oportunidade para começar de novo com mais experiência.',
        'O sucesso não é final, o fracasso não é fatal - é a coragem de continuar que conta.',
        'Você é a única pessoa capaz de limitar seus sonhos, então sonhe grande e vá atrás deles!'
    ];

    function quebraBiscoito() {
        let numeroAleatorio = Math.floor(Math.random()*frases.length);
        setImg(require('./src/openCookie.png'));
        setTextoFrase(`"${frases[numeroAleatorio]}"`);
    }
    
    function reiniciaBiscoito(){
        setImg(require('./src/cookie.png'));
        setTextoFrase('');
    }

    return (
        <View style={styles.container}>

            <Image
                source={img}
                style={styles.img}
            />

            <Text style={styles.textoFrase}>{textoFrase}</Text>

            <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
                <View style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={ reiniciaBiscoito }>
                <View style={styles.btnArea}>
                    <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 230,
        height: 230
    },
    textoFrase: {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao: {
        width: 230,
        height: 50,
        borderColor: '#dd7b22',
        borderWidth: 2,
        borderRadius: 25
    },
    btnArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
});
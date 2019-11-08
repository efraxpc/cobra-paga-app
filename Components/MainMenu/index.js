import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button, Icon, Content, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class MainMenu extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Cobra Paga</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.content}>
                    <Button block info style={styles.button}>
                        <Text>Cliente Cercarno</Text>
                    </Button>
                    <Button block info style={styles.button}>
                        <Text>Lista Clientes</Text>
                    </Button>
                    <Button block info style={styles.button}>
                        <Text>Cliente Nuevo</Text>
                    </Button>
                    <Button block info style={styles.button}>
                        <Text>Agregar Gasto</Text>
                    </Button>
                    <Button block info style={styles.button}>
                        <Text>Información Cobro</Text>
                    </Button>
                    <Button block info style={styles.button}
                        onPress={() => this.props.navigation.navigate('PendingClients')}>
                        <Text>Clientes Pendientes</Text>
                    </Button>
                    <Button block info style={styles.button}>
                        <Text>Configuración</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50
    },
    button: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    }
});


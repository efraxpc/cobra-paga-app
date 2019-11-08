import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container, Header, Item, Input, Icon, Button,
    Text, Content, List, Right, Left, ListItem, Thumbnail,
    Body
} from 'native-base';
export default class PendingClients extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
        headerTitle:'Clientes Pendientes',
        headerRight: (
            <Icon type="FontAwesome" name="external-link" 
            style={{color: '#fff', paddingRight: 10, paddingTop: 7}}
            onPress={() => navigation.navigate('MapPendingclients')}
            />
        )
    }};
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('object')
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Buscar" onChange={this.onChangeFinfClientInput} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Buscar</Text>
                    </Button>
                </Header>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_191958.png' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_191958.png' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://cdn.onlinewebfonts.com/svg/img_191958.png' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mapIcon: {
        color: '#fff'
    }
});


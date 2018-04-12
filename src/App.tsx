import * as React from 'react';
import './App.css';
import { chattoStore } from './store';
import { Provider } from 'react-redux';
import { ChattoConnected } from './component/Chatto';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    UserProvider,
    UserContext
} from './context/user/User.context';
import { IChattoUser } from './model/user';

class App extends React.Component {

    render() {
        return (
            <Provider store={chattoStore}>
                <div className="App">
                    <Container>
                        <Row>
                            <Col>
                                {/*
                                  * For the first Chatto component
                                  * Test of the new react context api
                                  *
                                  * @link https://reactjs.org/docs/context.html#when-to-use-context
                                  * */}
                                <UserProvider>
                                    <UserContext.Consumer>
                                        {(user: IChattoUser) => <ChattoConnected user={user}/>}
                                    </UserContext.Consumer>
                                </UserProvider>
                            </Col>
                            <Col>
                                {/*
                                  * The second Chatto component have a simple user props
                                  * */}
                                <ChattoConnected user={{id: 2, name: 'Bar'}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;

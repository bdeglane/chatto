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
    UserContext,
    IUserProviderState
} from './context/user/User.context';
import { CSSProperties } from 'react';
import {
    bg,
    user2pic
} from './images';

const appDivStyle: CSSProperties = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(15px)'
};

class App extends React.Component {

    render() {
        // tslint:disable
        return (
            <Provider store={chattoStore}>
                <div className='App'>
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
                                        {({user, toggleUser}: IUserProviderState) => (
                                            // react fragment
                                            <>
                                                < ChattoConnected user={user}/>
                                                {/*
                                                  * Use to toggle user from the context
                                                  * provide by <UserProvider/>
                                                  * */}
                                                {/*<Button onClick={toggleUser}>
                                                    ToggleUser from parent component
                                                </Button>*/}
                                            </>
                                        )}
                                    </UserContext.Consumer>
                                </UserProvider>
                            </Col>
                            <Col>
                                {/*
                                  * The second Chatto component have a simple user props
                                  * */}
                                <ChattoConnected user={{
                                    id: 2,
                                    name: 'Bar',
                                    pic: `${user2pic}`
                                }}/>
                            </Col>
                        </Row>
                    </Container>
                    <div className='bg'
                         style={appDivStyle}></div>
                </div>
            </Provider>
        );
    }
}

export default App;

import * as React from 'react';
// import { ChattoWindow } from '../chatto-window/ChattoWindow';
import { ChattoInput } from '../chatto-input/ChattoInput';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import {
    IDispatchProps,
    IOwnProps,
    IStateProps,
} from './index';
import { ChattoWindow } from '../chatto-window/ChattoWindow';
import { ChattoWindowUser } from '../../context/user/User.context';

// add all 3 props type
type ChattoProps = IStateProps & IDispatchProps & IOwnProps;

export interface IChattoState {
}

export class Chatto extends React.Component<ChattoProps, IChattoState> {

    constructor(props: ChattoProps) {
        super(props);

        this.onAddMessage = this.onAddMessage.bind(this);
    }

    /**
     *
     * @param {IChattoMessage} message
     */
    onAddMessage(message: string) {
        const {user} = this.props;
        const {addMessage} = this.props.actions;
        addMessage({
            user,
            text: message,
            date: new Date()
        });
    }

    render() {

        const {
            messages,
            user
        } = this.props;
        //tslint:disable
        return (
            <Container className="chatto">
                <Row>
                    <Col>
                        {/*
                          * in case on first node on user.id=1 Foo
                          * render the HOC <ChattoWindowUser/>
                          *
                          * On second user Bar, render a classic component
                          */}
                        {user.id === 1
                            ? <ChattoWindowUser messages={messages}/>
                            : <ChattoWindow messages={messages} userId={user.id}/>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ChattoInput onAddMessage={this.onAddMessage}/>
                    </Col>
                </Row>
                {/* call a chatto window with hoc */}
                {/*<Row><Col>{user.id === 1 ? <ChattoWindowUserWithHOC messages={messages}/> : <p>Nothing</p>}</Col></Row>*/}
            </Container>
        );
    }
}

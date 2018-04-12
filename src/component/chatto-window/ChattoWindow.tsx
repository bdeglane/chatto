import * as React from 'react';
import { IChattoMessage } from '../../model/message';
import { ChattoMessage } from '../chatto-message/ChattoMessage';
import './ChattoWindow.css';

export interface IChatWindowProps {
    messages: IChattoMessage[];
    userId?: number;
}

/**
 *
 * @param {IChatWindowProps & {children?: React.ReactNode}} props
 * @returns {any}
 * @constructor
 */
export class ChattoWindow extends React.Component<IChatWindowProps> {

    public el: HTMLDivElement;

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollTop = this.el.scrollHeight;
    }

    render() {
        const {
            messages,
            userId
        } = this.props;

        //tslint:disable
        return (
            <div className="messages"
                 ref={(el: HTMLDivElement) => this.el = el}>
                {messages.map((message: IChattoMessage, id: number) =>
                    <ChattoMessage key={id}
                                   message={message}
                                   mine={message.user.id === userId}/>)}
            </div>);
    }
}

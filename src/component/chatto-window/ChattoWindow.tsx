import * as React from 'react';
import { IChattoMessage } from '../../model/message';
import { ChattoMessage } from '../chatto-message/ChattoMessage';
import Scrollbars from 'react-custom-scrollbars';
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
    public scrollBar: Scrollbars;

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.scrollBar.scrollToBottom();
    }

    render() {
        const {
            messages,
            userId
        } = this.props;

        //tslint:disable
        return (
            <div className='messages'
                 ref={(el: HTMLDivElement) => this.el = el}>
                <Scrollbars ref={(sc: any) => this.scrollBar = sc}
                            // This will activate auto hide
                            autoHide
                            // Hide delay in ms
                            autoHideTimeout={1000}
                            // Duration for hide animation in ms.
                            autoHideDuration={200}>
                    {messages.map((message: IChattoMessage, id: number) =>
                        <ChattoMessage key={id}
                                       message={message}
                                       mine={message.user.id === userId}/>)}
                </Scrollbars>
            </div>);
    }
}

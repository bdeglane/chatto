import * as React from 'react';
import { IChattoMessage } from '../../model/message';
import * as cx from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import './ChattoMessage.css';
import { ChattoPic } from '../chatto-pic/ChattoPic';

export interface IChattoMessageProps {
    message: IChattoMessage;
    mine: boolean;
}

/**
 *
 * @param {IChatWindowProps & {children?: React.ReactNode}} props
 * @returns {any}
 * @constructor
 */
export const ChattoMessage: React.SFC<IChattoMessageProps> = (props) => {

    const {
        message,
        mine
    } = props;

    const classNames = cx('message', {mine});

    // tslint:disable
    const displayUser = (myMessage) => {
        if (!myMessage) {
            return (<ChattoPic src={message.user.pic}
                               alt={`${message.user.name} profile picture`}/>);
        }
        return <></>;
    };

    // with simple animation
    // @link https://github.com/reactjs/react-transition-group/tree/v1-stable#animate-initial-mounting
    return (
        // tslint:disable
        <CSSTransitionGroup
            transitionName='example'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className={classNames}>
                <div className='user'>
                    {displayUser(mine)}
                </div>
                <div className='text'>{message.text}</div>
            </div>
        </CSSTransitionGroup>
    );
};

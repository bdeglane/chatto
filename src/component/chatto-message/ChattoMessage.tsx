import * as React from 'react';
import { IChattoMessage } from '../../model/message';
import {
    Col,
    Row
} from 'reactstrap';
import * as cx from 'classnames';
import './ChattoMessage.css';

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

    return (
        <Row>
            <Col>
                <div className={classNames}>{message.text}</div>
            </Col>
        </Row>
    );
};

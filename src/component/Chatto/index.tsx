import { Chatto } from './Chatto';
import { connect } from 'react-redux';
import { addMessage } from '../../store/action/message.action';
import { IState } from '../../store/reducer';
import { Dispatch } from 'redux';
import { IChattoMessage } from '../../model/message';
import { IChattoUser } from '../../model/user';

// @link https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d
// to avoid typescript compilation error on connected components

// props from parent
export interface IOwnProps {
    user: IChattoUser;
}

// props from redux store
export interface IStateProps {
    messages: IChattoMessage[];
}

// actions props
export interface IDispatchProps {
    actions: {
        addMessage: (message: IChattoMessage) => any;
    };
}

const mapStateToProps = (state: IState, ownProps: IOwnProps): IStateProps => ({
    messages: state.message
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: IOwnProps): IDispatchProps => ({
    actions: {
        addMessage: (message: IChattoMessage) => {
            dispatch(addMessage(message));
        }
    }
});

export const ChattoConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chatto);

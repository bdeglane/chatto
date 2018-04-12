import * as React from 'react';
import { IChattoUser } from '../../model/user';
import {
    ChattoWindow,
    IChatWindowProps
} from '../../component/chatto-window/ChattoWindow';

// default value of context
const defaultUserContext: IChattoUser = {
    id: 1,
    name: 'Foo'
};
// avoid compilation error on the new api context
export const UserContext = (React as any).createContext();

export interface IUserProvider {
    user: IChattoUser;
}

export class UserProvider extends React.Component<{}, IUserProvider> {
    state = {
        user: defaultUserContext
    };

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export class ChattoWindowUser extends React.Component<IChatWindowProps> {
    render() {
        return (
            <UserContext.Consumer>
                {(user: IChattoUser) => (<ChattoWindow userId={user.id} {...this.props}/>)}
            </UserContext.Consumer>
        );
    }
}

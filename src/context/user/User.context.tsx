import * as React from 'react';
import { IChattoUser } from '../../model/user';
import {
    ChattoWindow,
    IChatWindowProps
} from '../../component/chatto-window/ChattoWindow';
import { ReactType } from 'react';
// import { Button } from 'reactstrap';

// This file contain example of how to handle React 16.3 context API
// base on react doc
// @link https://reactjs.org/docs/context.html

// default value of context
export const defaultUserContext: IChattoUser = {
    id: 1,
    name: 'Foo',
    // tslint:disable:max-line-length
    pic: 'data:image/jpeg;base64,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'
};

// creation of user context
// avoid compilation error on the new api context with any type def
// and use default value
export const UserContext = (React as any).createContext({
    // user: defaultUserContext,
    // toggleUser: () => ({id: 3, name: 'Baz'})
});

export interface IUserProviderState {
    user: IChattoUser;
    toggleUser: () => any;
}

// provide a context containing a user
// and a method to toggle user
export class UserProvider extends React.Component<{}, IUserProviderState> {

    constructor(props: any) {
        super(props);
        // @link https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            user: defaultUserContext,
            toggleUser: this.toggleUser,
        };
    }

    toggleUser = () => {
        // tslint:disable:align
        this.setState((state: IUserProviderState) => ({
                user: state.user.id === 1
                    ? {id: 3, name: 'Baz', pic: ''}
                    : defaultUserContext
            }),
            () => console.log('Toggle user from context new user', this.state.user));
        // tslint:enable
    }

    render() {
        return (
            // The entire state is passed to the provider
            <UserContext.Provider value={this.state}>
                {/*<Button onClick={this.toggleUser}>ToggleUser from UserProvider component</Button>*/}
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

// in case of one component consume the context
export class ChattoWindowUser extends React.Component<IChatWindowProps> {
    render() {
        return (
            <UserContext.Consumer>
                {({user}: IUserProviderState) => (<ChattoWindow userId={user.id} {...this.props}/>)}
            </UserContext.Consumer>
        );
    }
}

// in case of multiple component consume the same user id context
// build an high order component withContext
// This function takes a component..
// typed HOC @link https://stackoverflow.com/a/31815634
export const withUserId = (Component: ReactType) =>
    // ...and returns another component..
    (props: any) =>
        // ... and renders the wrapped component with the context user id!
        // Notice that we pass through any additional props as well
        (
            <UserContext.Consumer>
                {({user}: IUserProviderState) => (<Component userId={user.id} {...props}/>)}
            </UserContext.Consumer>
        );

// Now any component that depends on the user id context can easy subscribe to it
// same as the <ChattoWindowUser/> class define line 71
export const ChattoWindowUserWithHOC: React.SFC<IChatWindowProps> = withUserId(ChattoWindow);

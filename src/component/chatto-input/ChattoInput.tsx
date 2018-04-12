import * as React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

export interface IChattoInputProps {
    onAddMessage: (message: string) => any;
}

export interface IChattoInputState {
    message: string;
}

/**
 *
 * @param {IChatWindowProps & {children?: React.ReactNode}} props
 * @returns {any}
 * @constructor
 */
export class ChattoInput extends React.Component<IChattoInputProps, IChattoInputState> {

    constructor(props: IChattoInputProps) {
        super(props);
        this.state = {message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
        // do not send empty message
        if (this.state.message.length > 0) {
            // handle new message
            this.onAddMessage(this.state.message);
            // reset input state
            this.setState({message: ''});
        }
    }

    /**
     *
     * @param {string} message
     */
    onAddMessage(message: string) {
        const {onAddMessage} = this.props;
        // dispatch new message to parent component
        onAddMessage(message);
    }

    render() {
        //tslint:disable
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Input value={this.state.message}
                               onChange={this.handleChange}/>
                        <InputGroupAddon addonType="prepend">
                            <Button type='submit'>Send</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}

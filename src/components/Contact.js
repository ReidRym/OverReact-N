import React, { useState } from 'react';
import { Parallax,Background } from 'react-parallax';
import Ryanpix from "../images/IMG-1313.JPG";

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from 'reactstrap';

const Contacts = () => {
    const [name, setName] = useState({ value: '', isValid: true });
    const [email, setEmail] = useState({ value: '', isValid: true });
    const [message, setMessage] = useState({ value: '', isValid: true });

    const onChangeName = e => {
        setName({ value: e.target.value, isValid: !!e.target.value });
    };

    const onChangeEmail = e => {
        const pattern = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
        const isValid = pattern.test(e.target.value);
        setEmail({ value: e.target.value, isValid });
    };

    const onChangeMessage = e => {
        setMessage({ value: e.target.value, isValid: !!e.target.value });
    };


    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Ryanpix}
        bgImageAlt=""
        strength={-200}
    >
        <Form className="contact-Form">
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={name.value}
                    onChange={onChangeName}
                    invalid={!name.isValid}
                />
                <FormFeedback>Please enter a valid name.</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={email.value}
                    onChange={onChangeEmail}
                    invalid={!email.isValid}
                />
                <FormFeedback>Please enter a valid email.</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="exampleMessage">Message</Label>
                <Input
                    type="textarea"
                    name="message"
                    id="exampleMessage"
                    value={message.value}
                    onChange={onChangeMessage}
                    invalid={!message.isValid}
                />
                <FormFeedback>Please enter your message.</FormFeedback>
            </FormGroup>

            <Button>Submit</Button>
        </Form>
        <div style={{ height: '700px' }} />
    </Parallax>
    );
};

export default Contacts;
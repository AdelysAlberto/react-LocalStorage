import { Form, Input } from "antd";
import React from "react";
import Validations from '../../utils/ValidationRules';
import { footerData } from '../../utils/StylesConstants';

const ContactComercial = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
    };
    const {getFieldDecorator} = props;

    return (
        <React.Fragment>
            <Form.Item  {...footerData}
                label={(<span> Nombre </span>)}>
                {
                    getFieldDecorator('firstname-comercial', {
                    rules: [Validations.name],
                })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={(<span> Apellido </span>)}>
                {
                    getFieldDecorator('lastname-comercial', {
                    rules: [Validations.lastname]
                    })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Telefono </span> )} >
                {
                    getFieldDecorator('phone-comercial', {
                    rules: [Validations.phone_100],
                })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Email </span> )} >
                {
                    getFieldDecorator('email-comercial', {
                    rules: [Validations.email, Validations.email_required],
                })( <Input/> )}
            </Form.Item>
        </React.Fragment>
    )
}

export default ContactComercial;
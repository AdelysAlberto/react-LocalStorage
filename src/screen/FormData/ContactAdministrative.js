import { Form, Input } from "antd";
import React from "react";
import Validations from '../../utils/ValidationRules';
import { footerData } from '../../utils/StylesConstants';

const ContactAdministrative = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
        data: props.data || {
            admin_f_name: '',
            admin_l_name: '',
            admin_phone: '',
            admin_email: '',
        }
    };
    const {getFieldDecorator} = props;
    const { data }= state;

    return (
        <React.Fragment>
            <Form.Item  {...footerData}
                label={(<span> Nombre </span>)}>
                {
                    getFieldDecorator(
                        'admin_f_name',
                        {initialValue: data.admin_f_name},
                        { rules: [Validations.name] })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={(<span> Apellido </span>)}>
                {
                    getFieldDecorator(
                        'admin_l_name',
                        {initialValue: data.admin_l_name},
                        { rules: [Validations.lastname] })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Telefono </span> )} >
                {
                    getFieldDecorator(
                        'admin_phone',
                        {initialValue: data.admin_phone},
                        { rules: [Validations.phone_100] })( <Input/> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Email </span> )} >
                {
                    getFieldDecorator(
                        'admin_email',
                        {initialValue: data.admin_email},
                        { rules: [Validations.email, Validations.email_required] })( <Input/> )}
            </Form.Item>
        </React.Fragment>
    )
}

export default ContactAdministrative;
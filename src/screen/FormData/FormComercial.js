import { Form, Input } from "antd";
import React from "react";
import Validations from '../../utils/validations_rules';
import { footerData } from '../../utils/styles_constants';

const FormComercial = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
        data: props.data || {
            comercial_f_name: '',
            comercial_l_name: '',
            comercial_phone: '',
            comercial_email: '',
        }
    };
    const { getFieldDecorator, disabled, styleReadOnly } = props;
    const { data }= state;
    return (
        <React.Fragment>
            <Form.Item  {...footerData}
                        label={(<span> Nombre </span>)}>
                { getFieldDecorator(
                        'comercial_f_name',
                        {initialValue: data.comercial_f_name,
                            rules: [Validations.name] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                        label={(<span> Apellido </span>)}>
                { getFieldDecorator(
                        'comercial_l_name',
                        {initialValue: data.comercial_l_name,
                            rules: [Validations.lastname] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                        label={( <span> Telefono </span> )} >
                { getFieldDecorator(
                        'comercial_phone',
                        {initialValue: data.comercial_phone,
                            rules: [Validations.phone_100] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                        label={( <span> Email </span> )} >
                { getFieldDecorator(
                        'comercial_email',
                        {initialValue: data.comercial_email,
                            rules: [Validations.email, Validations.email_required] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
        </React.Fragment>
    )
}

export default FormComercial;
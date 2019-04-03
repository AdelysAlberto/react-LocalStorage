import { Form, Input } from "antd";
import React from "react";
import Validations from '../../utils/validations_rules';
import { footerData } from '../../utils/styles_constants';

const FormAdministrative = (props) => {
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
    const { getFieldDecorator, disabled, styleReadOnly } = props;
    const { data }= state;

    return (
        <React.Fragment>
            <Form.Item  {...footerData}
                label={(<span> Nombre </span>)}>
                { getFieldDecorator(
                        'admin_f_name',
                        {initialValue: data.admin_f_name,
                            rules: [Validations.name] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={(<span> Apellido </span>)}>
                { getFieldDecorator(
                        'admin_l_name',
                        {initialValue: data.admin_l_name,
                            rules: [Validations.lastname] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Telefono </span> )} >
                { getFieldDecorator(
                        'admin_phone',
                        {initialValue: data.admin_phone,
                            rules: [Validations.phone_100] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
            <Form.Item  {...footerData}
                label={( <span> Email </span> )} >
                { getFieldDecorator(
                        'admin_email',
                        {initialValue: data.admin_email,
                            rules: [Validations.email, Validations.email_required] })( <Input className={styleReadOnly} disabled={ disabled } /> )}
            </Form.Item>
        </React.Fragment>
    )
};
export default FormAdministrative;
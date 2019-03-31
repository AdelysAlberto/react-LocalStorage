import { TimePicker, Form, Input } from "antd";

import React from "react";
import  Validations  from  '../../utils/ValidationRules';

const ContactDelivery = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
    };
    const {TextArea} = Input;
    const format = 'HH:mm';
    const {getFieldDecorator} = props;

    return (
        <React.Fragment>
            <Form.Item
                label={(
                    <span>
                            Nombre
                        </span>
                )}
            >
                {getFieldDecorator('nombre', {
                    rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                        required: true, message: 'Please input your E-mail!',
                    }],
                })(
                    <Input/>
                )}
            </Form.Item>
            <Form.Item
                label={(
                    <span>
                            Telefono
                        </span>
                )}
            >
                {getFieldDecorator('nickname', {
                    rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
                })(
                    <Input/>
                )}
            </Form.Item>

            <Form.Item
                label={(
                    <span>
                            Descripcion
                        </span>
                )}
            >
                {getFieldDecorator('phone', {
                    rules: [{required: true, message: 'Please input your phone number!'}],
                })(
                    <TextArea placeholder="description" autosize={{minRows: 3, maxRows: 6}}/>
                )}
            </Form.Item>

            <Form.Item
                label={(
                    <span>
                            Especialidades
                        </span>
                )}
            >
                {getFieldDecorator('phone', {
                    rules: [{required: true, message: 'Please input your phone number!'}],
                })(
                    <TextArea placeholder="description" autosize={{minRows: 3, maxRows: 6}}/>
                )}
            </Form.Item>
            <Form.Item
                label={(
                    <span>
                            Direccion
                        </span>
                )}
            >
                {getFieldDecorator('website', {
                    rules: [{required: true, message: 'Please input website!'}],
                })(
                    <Input/>
                )}
            </Form.Item>

            <Form.Item
                label={( <span> Horario Atencion </span> )} >
                {getFieldDecorator('timeto', {
                    rules: [Validations.required],
                })(
                    <TimePicker  format={format} />
                )}

            </Form.Item>
        </React.Fragment>
    )
};

export default ContactDelivery;
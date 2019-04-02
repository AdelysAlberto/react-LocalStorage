import {TimePicker, Form, Input} from "antd";

import React from "react";
import Validations from '../../utils/ValidationRules';
import moment from "moment";


const ContactDelivery = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
        data: props.data || {
            name: '',
            phone: '',
            description: '',
            special: '',
            direction:'',
            timeto:'',
        }
    };
    const {TextArea} = Input;
    const format = 'HH:mm';
    const {data} = state;
    const {getFieldDecorator} = props;
    const time= moment(data.timeto, "HH:mm") || '';
    return (
        <React.Fragment>
            <Form.Item
                label={(<span> Nombre </span>)}>
                {
                    getFieldDecorator(
                        'name',
                        {initialValue: data.name},
                        {rules: [Validations.name]})(<Input/>)
                }
            </Form.Item>
            <Form.Item
                label={(<span> Telefono </span>)}>
                {
                    getFieldDecorator(
                        'phone',
                        {initialValue: data.phone},
                        {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true
                                }],
                        })(<Input/>)
                }
            </Form.Item>

            <Form.Item
                label={(<span> Descripcion </span>)}>
                {
                    getFieldDecorator(
                        'description',
                        {initialValue: data.description},
                        {
                            rules: [
                                {required: true, message: 'Please input your phone number!'}
                            ],
                        })(<TextArea placeholder="description" autosize={{minRows: 3, maxRows: 6}}/>)}
            </Form.Item>

            <Form.Item
                label={(<span> Especialidades </span>)}>
                {
                    getFieldDecorator(
                        'special',
                        {initialValue: data.special},
                        {
                            rules: [
                                {required: true, message: 'Please input your phone number!'}
                            ],
                        })(<TextArea placeholder="description" autosize={{minRows: 3, maxRows: 6}}/>)}
            </Form.Item>
            <Form.Item
                label={(<span> Direccion </span>)}>
                {
                    getFieldDecorator(
                        'direction',
                        {initialValue: data.direction},
                        {
                            rules: [
                                {required: true, message: 'Please input website!'}
                            ],
                        })(<Input/>)}
            </Form.Item>

            <Form.Item
                label={(<span> Horario Atencion </span>)}>
                {
                    getFieldDecorator(
                        'timeto',
                        {initialValue: time },
                        {rules: [Validations.required],})(<TimePicker format={format}/>)}

            </Form.Item>
        </React.Fragment>
    )
};

export default ContactDelivery;
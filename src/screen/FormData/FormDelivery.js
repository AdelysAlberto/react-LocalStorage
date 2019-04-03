import { TimePicker, Form, Input } from "antd";

import React from "react";
import Validations from '../../utils/ValidationRules';
import moment from "moment";


const FormDelivery = (props) => {
    const state = {
        current: 'new',
        autoCompleteResult: [],
        data: props.data || {
            id:'',
            name: "",
            phone: "",
            description: "",
            special: "",
            direction:"",
            time_to:"",
            time_from:"",
        },
    };


    const { TextArea } = Input;
    const format = 'HH:mm';
    const { data } = state;
    const { getFieldDecorator, disabled, styleReadOnly } = props;
    const time_from= data.time_from ? moment(data.time_from, "HH:mm") : moment('12:00', "HH:mm") ;
    const time_to= data.time_to ? moment(data.time_from, "HH:mm") : moment('12:00', "HH:mm") ;

    return (
        <React.Fragment>
            <Form.Item
                label={(<span> Nombre </span>)}>
                <div>
                { getFieldDecorator(
                        'name',
                        { initialValue: data.name, rules: [ Validations.name ]})(<Input className={styleReadOnly} disabled={ disabled } />)
                }
                { getFieldDecorator(
                    'id',
                    { initialValue: data.id})(<Input type={'hidden'} className={styleReadOnly} disabled={ disabled } />)
                }
                </div>
            </Form.Item>
            <Form.Item
                label={(<span> Telefono </span>)}>
                { getFieldDecorator(
                        'phone',
                        { initialValue: data.phone, rules: [ Validations.phone_100 ]}
                        )(<Input className={styleReadOnly} disabled={ disabled } />)
                }
            </Form.Item>

            <Form.Item
                label={(<span> Descripcion </span>)}>
                { getFieldDecorator(
                        'description',
                        { initialValue: data.description, rules: [ Validations.description ]}
                        )(<TextArea className={styleReadOnly}  disabled={ disabled } placeholder="description" autosize={{ minRows: 3, maxRows: 6 }}/>)}
            </Form.Item>

            <Form.Item
                label={(<span> Especialidades </span>)}>
                { getFieldDecorator(
                        'special',
                        { initialValue: data.special, rules: [ Validations.specialties ]
                        })(<TextArea className={styleReadOnly} disabled={ disabled } placeholder="description" autosize={{ minRows: 3, maxRows: 6 }}/>)}
            </Form.Item>
            <Form.Item
                label={(<span> Direccion </span>)}>
                { getFieldDecorator(
                        'direction',
                        { initialValue: data.direction, rules: [ Validations.direction ]
                        })(<Input className={styleReadOnly} disabled={ disabled } />)}
            </Form.Item>

            <Form.Item
                label={(<span> Horario Atencion </span>)}>
                <div className={'d-flex'}>{ getFieldDecorator(
                        'time_to',
                        { initialValue: time_to, rules: [ Validations.required ]}
                    )(<TimePicker className={styleReadOnly} disabled={ disabled } format={format}/>)
                } <span className={'ml-2 mr-2'}> a </span>
                    { getFieldDecorator(
                        'time_from',
                        { initialValue: time_from, rules: [ Validations.required ]}
                    )(<TimePicker className={styleReadOnly}  disabled={ disabled } format={format}/>)
                    }
                </div>

            </Form.Item>
        </React.Fragment>
    )
};

export default FormDelivery;
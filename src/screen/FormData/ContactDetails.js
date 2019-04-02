import React from 'react';
import {Form, Row, Col, Button, AutoComplete,} from 'antd';

import ContactDelivery from './ContactDelivery';
import ContactComercial from "./ContactComercial";
import ContactAdministrative from "./ContactAdministrative";

import {formItemLayout} from '../../utils/StylesConstants';
import moment from 'moment';
import {Link, Redirect} from "react-router-dom";
import _ from "lodash";


class ContactDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'new',
            autoCompleteResult: [],
            data: [],
            redirect: false
        };
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
            }
            this.updateStorage(values);
            const time = moment('12:08', 'HH:mm');
            console.log("lo que recibo", values);
        });
    };

    updateStorage = (values) => {
        const uuidv1 = require('uuid/v1');
        const id = uuidv1();
        console.log("el ID", id);
        let add = {...values, id};
        let existing = JSON.parse(localStorage.getItem('data')) || [];

        console.log("tengo algo en storage?", existing);

        existing.push(add);

        console.log("Preparado para actualizar la data", existing);
        localStorage.setItem('data', JSON.stringify(existing));

        console.log("Guarde algo?", JSON.parse(localStorage.getItem('data')));

        this.setState({redirect: true});
    };

    componentDidMount() {
        this.setState({data: JSON.parse(localStorage.getItem('data'))})
    }

    clearLocalStorage = () => {
        console.log("Limpiando Storage");
        localStorage.clear();
    };

    render() {
        console.log("la data", this.state.data);
        console.log("el ID", this.props.match.params);
        const data=_.find(this.state.data, {'id':this.props.match.params.id});

        console.log("Los props", data);

        const {getFieldDecorator} = this.props.form;

        return (
            <>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={12}>
                            <div className="offset-3">
                                <h5 className="border-bottom">Datos del Delivery</h5>
                            </div>
                            <ContactDelivery getFieldDecorator={getFieldDecorator}/>
                        </Col>
                        <Col span={12}>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={3}>
                            <h5 className="border-bottom">Contacto Administrativo</h5>
                            <Row>
                                <Col span={24}>
                                    <ContactAdministrative getFieldDecorator={getFieldDecorator}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={3}>
                            <h5 className="border-bottom">Contacto Comercial</h5>
                            <Row>
                                <Col span={24}>
                                    <ContactComercial getFieldDecorator={getFieldDecorator}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22} className="d-flex justify-content-end">
                            <Button className="mr-2" type="primary" htmlType="submit">Guardar</Button>
                            <Link to="/" className="mr-2 btn btn-primary">Cancel</Link>
                            <Button type="warning" htmlType="button" onClick={this.clearLocalStorage}>Limpiar</Button>
                        </Col>
                    </Row>
                </Form>
                {this.state.redirect && (<Redirect to={"/"}/>)}
            </>
        )
    }
}

const ContactDetailsForm = Form.create({name: 'register'})(ContactDetails);

export default ContactDetailsForm;
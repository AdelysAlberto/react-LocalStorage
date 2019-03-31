import React from 'react';
import { Form, Input, Row, Col,  Button, AutoComplete, } from 'antd';

import ContactDelivery from './ContactDelivery';
import ContactComercial from "./ContactComercial";
import ContactAdministrative from "./ContactAdministrative";

import { formItemLayout, footerData } from '../../utils/StylesConstants';
import  Validations  from  '../../utils/ValidationRules';
import moment from 'moment';


class FormData extends React.Component {
    state = {
        current: 'new',
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            const time= moment('12:08', 'HH:mm');
            console.log(values);
        });
    };
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    }

    render() {

        const AutoCompleteOption = AutoComplete.Option;
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;
        console.log(Validations.validateName );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (

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
                                <ContactComercial getFieldDecorator={getFieldDecorator} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={22} className="d-flex justify-content-end">
                            <Button type="primary" htmlType="submit">Register</Button>
                    </Col>
                </Row>
    </Form> )}
}

    const FormDataRegister = Form.create({ name: 'register' })(FormData);

    export default FormDataRegister;
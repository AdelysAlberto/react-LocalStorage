import React from 'react';
import { Form, Row, Col,  Button, AutoComplete, } from 'antd';

import ContactDelivery from './ContactDelivery';
import ContactComercial from "./ContactComercial";
import ContactAdministrative from "./ContactAdministrative";

import { formItemLayout } from '../../utils/StylesConstants';
import moment from 'moment';


class FormData extends React.Component {
    state = {
        current: 'new',
        autoCompleteResult: [],
        data:[]
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
            }
            this.updateStorage(values);
            const time= moment('12:08', 'HH:mm');
            console.log("lo que recibo", values);
        });
    };

    updateStorage = (values) => {
        let existing = JSON.parse(localStorage.getItem('data'));
        console.log("tengo algo en storage?", existing);

        //existing = existing ? existing.split(',') : [];
        existing.push(values);

        console.log("Preparado para actualizar la data", existing);
        localStorage.setItem('data', JSON.stringify(existing));

        console.log("Guarde algo?", JSON.parse(localStorage.getItem('data')));

    };

    componentDidMount() {
        this.setState({data: localStorage.getItem('data')})
    }

    clearLocalStorage = () => {
        console.log("Limpiando Storage");
        localStorage.clear();
    };

    render() {

        console.log("data del storage", this.state.data);
        const AutoCompleteOption = AutoComplete.Option;
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;


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
                            <Button className="mr-2" type="primary" htmlType="submit">Guardar</Button>
                            <Button type="warning" htmlType="button" onClick={this.clearLocalStorage}>Limpiar</Button>
                    </Col>
                </Row>
    </Form> )}
}

    const FormDataRegister = Form.create({ name: 'register' })(FormData);

    export default FormDataRegister;
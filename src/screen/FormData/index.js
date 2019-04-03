import React from 'react';
import {Form, Row, Col, Button, Popconfirm, message} from 'antd';

import FormDelivery from './FormDelivery';
import FormComercial from "./FormComercial";
import FormAdministrative from "./FormAdministrative";
import { updateStorage  } from '../../utils/helpers';
import { TEXT_CONFIRM  } from '../../utils/constants';
import { formItemLayout } from '../../utils/styles_constants';

import { Redirect } from "react-router-dom";
import _ from "lodash";


class FormData extends React.Component {
    state = {
        current: 'new',
        autoCompleteResult: [],
        data: [],
        redirect: false,
        disabled: window.location.pathname !== '/add',
    };

    confirm = () => {
        message.info('Campos habilitados para editar');
        this.setState({ disabled: false});
    };
    cancelForm = () => {
        this.setState({ redirect: true });
    };

    handleSubmit =  (e)  => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log(values);
                await  updateStorage(values);
                message.success('Los datos han sido almacenados...');
                this.setState({ redirect: true });
            }

        });
    };


    componentDidMount() {
        this.setState({ data: JSON.parse(localStorage.getItem('data')) })
    }

    render() {
        const data=_.find(this.state.data, { 'id':this.props.match.params.id });
        const {disabled} = this.state;
        const styleReadOnly= disabled ? 'isReadOnly' : '';
        const {getFieldDecorator} = this.props.form;
        return (
            <>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={12}>
                            <div className="offset-3">
                                <h5 className="border-bottom">Datos del Delivery</h5>
                            </div>
                            <FormDelivery styleReadOnly={styleReadOnly} disabled={ disabled } data={ data } getFieldDecorator={ getFieldDecorator }/>
                        </Col>
                        <Col span={12}>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={3}>
                            <h5 className="border-bottom">Contacto Administrativo</h5>
                            <Row>
                                <Col span={24}>
                                    <FormAdministrative styleReadOnly={styleReadOnly} disabled={ disabled } data={ data } getFieldDecorator={ getFieldDecorator }/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8} offset={3}>
                            <h5 className="border-bottom">Contacto Comercial</h5>
                            <Row>
                                <Col span={24}>
                                    <FormComercial styleReadOnly={styleReadOnly} disabled={ disabled } data={ data } getFieldDecorator={ getFieldDecorator }/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22} className="d-flex justify-content-end">
                            {disabled &&
                            <Popconfirm placement="top" title={TEXT_CONFIRM.TEXT_EDIT} onConfirm={this.confirm}  okText="Yes" cancelText="No">
                                <Button className="mr-2" type="primary" htmlType="button"> Editar </Button>
                            </Popconfirm>
                            }
                            {!disabled &&
                                <Button className="mr-2" type="primary" htmlType="submit"> Guardar </Button>
                            }
                            <Button type="warning" htmlType="button" onClick={ this.cancelForm }> Cancelar </Button>
                        </Col>
                    </Row>
                </Form>
                {this.state.redirect && (<Redirect to={"/"}/>)}
            </>
        )
    }
}

const FormDataRegister = Form.create({name: 'register'})(FormData);

export default FormDataRegister;
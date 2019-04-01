import React from 'react';
import {Table, Form, Row, Col, Button, AutoComplete,} from 'antd';
import {Link} from "react-router-dom";


export default class GridData extends React.Component {
    state = {
        current: 'new',
        autoCompleteResult: [],
        data: []
    };

    componentDidMount() {
        this.setState({data: JSON.parse(localStorage.getItem('data'))})
    }

    render() {

        const data = (this.state.data);
        console.log("El State", data);
        const columns = [{
            title: 'Nombre',
            dataIndex: 'nombre',
        },
            {
                title: 'Direccion',
                dataIndex: 'direccion',
            },
            {
                title: 'Telefono',
                dataIndex: 'phone',
            }];

        return (
            <React.Fragment>
                <Row>
                    <Col span={20}>
                        <h2>
                            Listado de Delivery
                        </h2>
                    </Col>
                    <Col span={4}>
                        <Link to="/add" className="btn btn-primary">ADD</Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Table columns={columns} dataSource={data}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

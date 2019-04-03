import React from 'react';
import {Table, Row, Col, Button, Icon, Card, Popconfirm, message} from 'antd';
import {Link} from "react-router-dom";
import {orderAlph} from '../../utils/helpers';
import _ from "lodash";
import {TEXT_CONFIRM} from "../../utils/constants";

export default class GridData extends React.Component {
    state = {
        data: [],
        clean: false,
        backup: [],
    };
    //This functions show details of register
    gotoDetail = (id) => {
        this.props.history.push(`/detail/delivery/${id}`);
    };

    //this functions delete any register by id
    delete = (id) => {
        const remove = _.remove(this.state.backup, function (el) {
            return el.id === id
        });
        //clear local storage complete
        localStorage.clear();
        //set new data after remove the register
        localStorage.setItem('data', JSON.stringify(this.state.backup));
        message.warning('El Registro ha sido eliminado');
        //set the state with the new object
        this.setState({data: this.state.backup});
        this.setState({clean: true});
    };

    //function simple filter of search by field on keyup
    searchFilter = (data, i) => {
        let currentData = this.state.data, newData = [];
        //first that all, pass to lowercase
        const index = data.target.value.toLowerCase();
        // I thinks that.... is good idea
        if (data.keyCode === 8) currentData = this.state.backup;

        // if the index is not null then apply the filter
        if (index !== "") {
            newData = currentData.filter(value => value[i].toLowerCase().includes(index));
            console.log("El Filtro", newData);
        } else {
            // if not restore the state, with all services
            newData = this.state.backup;
            this.setState({data: newData});
        }
        this.setState({data: newData});
    };

    componentDidMount() {
        this.setState(
            {
                // I set 2 state with same data, by Emergency IDEAS!
                data: JSON.parse(localStorage.getItem('data')),
                backup: JSON.parse(localStorage.getItem('data')),
            })
    }

    //this is my optional INPUT to test.
    // clearStorage manually
    clearLocalStorage = () => {
        this.setState({clean: true});
        console.log("Limpiando Storage");
        localStorage.clear();
    };

    render() {
        //get data sources from the state
        const {data} = this.state;
        console.log(data);
        //define the columns
        const columns = [{
            //set the title each column
            title: 'Nombre',
            key: ((value, record) => record.id),
            //get de path from array
            dataIndex: 'name',
            //apply filter order by alphabetical
            sorter: (a, b) => orderAlph(a.name.toUpperCase(), b.name.toUpperCase()),
            render: (record, value) => {
                return (<span className="c-pointer" key={value.id}
                              onClick={() => this.gotoDetail(value.id)}>{value.name}</span>)
            }
        },
            {
                key: ((value, record) => (record.id + 3)),
                title: 'Direccion',
                dataIndex: 'direction',
            },
            {
                key: ((value, record) => (record.id + 2)),
                title: 'Telefono',
                dataIndex: 'phone',
            },
            {
                key: ((value, record) => (record.id + 1)),
                title: 'Actions',
                dataIndex: 'actions',
                width: '10%',
                render: (record, value) => {
                    return (
                        <div>
                            <Popconfirm placement="topLeft" title={TEXT_CONFIRM.TEXT_TRASH}
                                        onConfirm={() => this.delete(value.id)} okText="Yes" cancelText="No">
                                <span className="d-inline-flex c-pointer mr-2 font-medium icon-trash"><Icon
                                    type="delete"/> </span>
                            </Popconfirm>
                            <Popconfirm placement="topLeft" title={TEXT_CONFIRM.TEXT_GO_EDIT}
                                        onConfirm={() => this.gotoDetail(value.id)} okText="Yes" cancelText="No">
                                <span className="d-inline-flex c-pointer font-medium icon-edit"><Icon
                                    type="edit"/> </span>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ];

        return (
            <React.Fragment>
                <Row className={'pr-5 pl-5'}>
                    <Col span={20}>
                        <h4>
                            Listado de Delivery
                        </h4>
                    </Col>
                    <Col span={4}>
                        <Link to="/add" className="btn btn-primary">CREAR NUEVO DELIVERY</Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2} className="mt-2 mb-2 ">
                        <div className="filters">
                            <span className={'mr-4 d-flex flex-row  align-items-center'}><Icon
                                className={'mr-2 font-normal'} type="filter"/> Filtros</span>
                            <span className={'d-flex align-items-center'}>Nombre <input type={'text'}
                                                                                        onKeyUp={(value) => this.searchFilter(value, 'name')}
                                                                                        className="form form-control ml-2 mr-2"/> </span>
                            <span className={'d-flex align-items-center'}>Direccion <input type={'text'}
                                                                                           onKeyUp={(value) => this.searchFilter(value, 'direction')}
                                                                                           className="form form-control ml-2"/> </span>
                        </div>
                    </Col>
                </Row>
                <Row className={'pr-5 pl-5'}>
                    <Col span={24}>
                        {/* THIS IS THE TABLE WITH ALL REGISTERS... SET THE Datasources and DataColumns   */}
                        <Table rowKey="datatable" columns={columns} dataSource={data}/>
                    </Col>
                </Row>
                <Button type="warning" className={'mt-2 ml-5'} htmlType="button" onClick={this.clearLocalStorage}>Limpiar
                    Local Storage</Button>
            </React.Fragment>
        )
    }
}

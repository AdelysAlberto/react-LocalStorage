import React from 'react';
import {Table, Row, Col, Button, Icon, Card} from 'antd';
import { Link } from "react-router-dom";
import { orderAlph } from '../../utils/helpers';
import _ from "lodash";

export default class GridData extends React.Component {
    state = {
        current: 'new',
        autoCompleteResult: [],
        data: [] ,
        clean: false,
        backup:[],
    };

    gotoDetail = (id) => {
        this.props.history.push(`/detail/delivery/${id}`);
    };

    searchData = (data) => {
        const index=data.target.value.toLowerCase();
        let currentData=this.state.data, newData=[];
        if(index!==""){
            newData = currentData.filter(value => value.name.toLowerCase().includes(index));
        } else {
            newData=this.state.backup;
        }
        this.setState({data:newData});
    };

    componentDidMount() {
        this.setState(
            { data: JSON.parse(localStorage.getItem('data')),
              backup: JSON.parse(localStorage.getItem('data')),
        })
    }

    clearLocalStorage = () => {
        this.setState({clean: true});
        console.log("Limpiando Storage");
        localStorage.clear();
    };

    render() {
        //get data sources from the state
        const { data } = this.state;

        //define the columns
        const columns = [{
            //set the title each column
            title: 'Nombre',
            key: ((value,record)=> record.id),
            //get de path from array
            dataIndex: 'name',
            sorter: (a, b) => orderAlph(a.name.toUpperCase(), b.name.toUpperCase()),
            render: (record,value) => {
            return (<span className="c-pointer" key={value.id} onClick={()=> this.gotoDetail(value.id)}>{value.name}</span>)}
            },
            {
                key: ((value,record)=> (record.id+3)),
                title: 'Direccion',
                dataIndex: 'direction',
            },
            {
                key: ((value,record)=> (record.id+2)),
                title: 'Telefono',
                dataIndex: 'phone',
            },
            {
                key: ((value,record)=> (record.id+1)),
                title: 'Actions',
                dataIndex: 'actions',
                width:'10%',
                render: (record, value)=>{ return (
                    <div>
                    <span className="d-inline-flex c-pointer mr-2 font-medium icon-trash "><Icon type="delete" /> </span>
                    <span className="d-inline-flex c-pointer font-medium icon-edit"  onClick={()=> this.gotoDetail(value.id)}><Icon type="edit" /> </span>
                    </div>
                )}
            }
            ];

        return (
            <React.Fragment>
                <Row className={'pr-5 pl-5'}>
                    <Col span={20}>
                        <h2>
                            Listado de Delivery
                        </h2>
                    </Col>
                    <Col span={4}>
                        <Link to="/add" className="btn btn-primary">CREAR NUEVO DELIVERY</Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={20} offset={2} className="mt-2 mb-2 ">
                        <div className="filters">
                            <span className={'mr-4 d-flex flex-row  align-items-center'}><Icon className={'mr-2 font-normal'} type="filter" /> Filtros</span>
                            <span><input type={'text'} onKeyUp={ this.searchData } className="form form-control" /> </span>
                        </div>
                    </Col>
                </Row>
                <Row className={'pr-5 pl-5'}>
                    <Col span={24} >
                        <Table rowKey="datatable" columns={columns} dataSource={data}/>
                    </Col>
                </Row>
                <Button type="warning" className={'mt-2 ml-5'} htmlType="button" onClick={this.clearLocalStorage}>Limpiar Local Storage</Button>
            </React.Fragment>
        )
    }
}

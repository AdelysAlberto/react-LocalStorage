import React  from 'react';
import {
   Row, Col, Layout } from 'antd';

import Logo from  '../../assets/logo-despegar.png';
import FormDataRegister from '../FormData';
import GridData from '../GridData'
import {Route} from "react-router-dom";


export default class Landpage extends React.Component{

    componentDidMount(){
        document.title = "Delivery";
    }

    render(){
        const { Header, Content, Footer } = Layout;
        return(
            <Layout className="layout" >
                <Row className={'mb-2 border header-des'} >
                    <Col lg={24} className="d-flex flex-row align-items-center justify-content-between" style={{padding:10}}>
                        <span>Delivery Online</span>
                        <img src={Logo} alt={'logo'} style={{height:40}}/>
                    </Col>
                </Row>
                <Content className='content'>
                    <GridData/>
                        <Route path='/add' component={FormDataRegister}/>
                        <Route path='/grid' component={GridData}/>
                </Content>
                <Footer  style={{ textAlign: 'center', backgroundColor:'#638abb', color:'#fff', height:40, marginTop:20 }}>
                    Test despegar.com
                </Footer>
            </Layout>
        )}
}
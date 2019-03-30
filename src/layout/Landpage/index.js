import React  from 'react';
import {Row, Col, Container }from "react-bootstrap";
import Logo from  '../../assets/logo-despegar.png';

export default class Landpage extends React.Component{
    constructor(){
        super();

    }
    componentDidMount(){
        document.title = "Home";
    }

    render(){

        return(
            <Container>
                <Row className={'m-2'}>
                    <Col lg={12} className="d-flex justify-content-center">
                        <img src={Logo} alt={'logo'}/>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        )}
}
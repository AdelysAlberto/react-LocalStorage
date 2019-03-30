import React  from 'react';
import {Row, Col, Container }from "react-bootstrap";
import Products from '../Products';
import test from '../../detalle.json';
import Logo from  '../../assets/dafiti-logo.png';


export default class Landpage extends React.Component{
    componentDidMount(){
        document.title = test.seoSettings.pageTitle;
    }
    render(){
        const { products } = test;
        // check how many products, if > 3, then grid is COL-4, else take 6 COL
        // you can try add more products to json
        const cols= products.length >= 3 ? 4 : 6;
        console.log(test);
        return(
            <Container>
                <Row className={'m-2'}>
                    <Col lg={12} className="d-flex justify-content-center">
                        <img src={Logo} alt={'logo'}/>
                    </Col>
                </Row>
                <Row>
                    {
                        //if products > 3 then render new grid system
                        products.map(product => {
                        return (
                            <Col lg={ cols }>
                                <Products product={product} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )}
}
import React from 'react'
import { Container, Form, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

const ListReclamos = (props) => {
 
    return(
        <Container className="container-fluid">
            <Form.Group className="formGroup" > 
                <Form.Row class="text-center">
                    <h3>Listado de Reclamos</h3>
                </Form.Row>
                <hr/>
                <Form.Row>
                    <Col>
                       <Form.Label column sm={9}>Nombre del Cliente</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>Importe del Reclamo</Form.Label>
                    </Col>
                </Form.Row>
                <hr/>
                {
                    props.claimList.map((claim) => {
                        return (
                            <Form.Row>
                                <Col>
                                    <Form.Label column sm={9}>{claim.name}</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Label column sm={9}>{claim.amount}</Form.Label>
                                </Col>
                            </Form.Row>
                        )
                    })
                }
                <hr/>
                <Form.Row>
                    <Col>
                        <Form.Label column sm={9}>Total Reclamos:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Label column sm={9}>${props.totalReclamos}</Form.Label>
                    </Col>
                </Form.Row>
           </Form.Group>
        </Container>
        )
}

const mapStateToProps = (state) => {
    return  {
        claimList: state.listaDeReclamos,
        totalReclamos: state.totalReclamos
    }
}

export default connect(mapStateToProps)(ListReclamos)


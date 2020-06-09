import React from 'react';
import Form from './Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Results from './Results'


export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contactInfo: [{name:"",email:"",title:""}]
        }
    }

    formCallback = (data) => {
        this.setState({contactInfo: data})
    }

    render(){
        return(

            <Container>
                <Row style={{paddingTop:'1em'}}>
                    <Col/>
                    <Col md={6}>
                        <Form  callback={this.formCallback}></Form>
                    </Col>  
                    <Col/>  
                </Row>
                <Row style={{paddingTop:'2em'}}>
                    <Col>
                        <Results contacts={this.state.contactInfo}/>
                    </Col>
                </Row>    
            </Container>    
        )
    }
}
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class AddressForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            address:'',
        }
    }

    myChangeHandler = (event) => {
        this.setState({address: event.target.value});
    }

    getEmails = (event) => {
        event.preventDefault();
        const url = `https://defund12emailapi.now.sh/api?address=${encodeURIComponent(this.state.address)}`
        fetch(url).then(data => data.json())
        .then((data) => this.props.callback(data.data)); 
        
    }

    render(){
        return(
        
                    <Form onSubmit={this.getEmails}>
                        <Form.Group>
                            <Form.Label>Address/Zip Code:</Form.Label>
                            <Form.Control type="text" onChange={this.myChangeHandler} placeholder="Enter address / zip code" />
                            <Form.Text className="text-muted">
                            We'll never collect any location data.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        {/* <InputGroup className="mb-3">
                        <Form.Control type="text" onChange={this.myChangeHandler} placeholder="Enter address / zip code" />
                        <Form.Text className="text-muted">
                            We'll never collect any location data.
                            </Form.Text>
                            <InputGroup.Append>
                            <Button type="submit" variant="outline-secondary">Submit</Button>
                            </InputGroup.Append>
                        </InputGroup> */}
                    </Form>
        )
    }
}
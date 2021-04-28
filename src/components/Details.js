import React, { useEffect, useRef, useState } from 'react'
import { Card, ListGroupItem, ListGroup, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch, } from 'react-redux'
import { loadCharacters } from '../redux/action-creators'
import { useParams, Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../utils/consts'


const Details = () => {

    let { characterId } = useParams();
    let uncontrolledInput = useRef();
    let [controlledInput, setControlledInput] = useState();
    console.log(controlledInput)

    const { characters, isLoading } = useSelector(store => store);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCharacters(characterId));
    }, [dispatch, characterId])

    console.log(characters)

    return (

        <Container className='d-flex justify-content-center'>
            {isLoading && (<h1 style={{ color: 'red' }}>LOADING</h1>)}
            {!isLoading && <Card className='pt-2' style={{ width: '18rem' }}>
                <div className='d-flex justify-content-center'><h4>DETAILS</h4></div>
                <Card.Img variant="top" src={characters.image} />
                <Card.Body>
                    <Card.Title>
                        Name: {characters.name}
                    </Card.Title>
                    <Card.Text >
                        Gender: {characters.gender}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        Species: {characters.species}
                    </ListGroupItem>
                    <ListGroupItem disabled={characters.type === '' ? true : false}>
                        Type: {characters.type}
                    </ListGroupItem>
                    <ListGroupItem variant={characters.status === 'Alive' ? 'success' : 'danger'}>Status: {characters.status}</ListGroupItem>
                    <ListGroupItem><p>uncontrolled input with information when character created, try to change it: </p> <input defaultValue={characters.created} ref={uncontrolledInput} /></ListGroupItem>
                    <ListGroupItem><p>same information, but this is controlled input, check console)</p><input defaultValue={characters.created} onChange={(e) => setControlledInput(e.target.value)}></input></ListGroupItem>
                </ListGroup>
                <Link to={MAIN_ROUTE}><Button style={{ width: '286px' }} className="pull-right mr-1" >Go back</Button></Link>
            </Card>}
        </Container>
    )
}


export default Details;

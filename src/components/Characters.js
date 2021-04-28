import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch, } from 'react-redux'
import { loadCharacters } from '../redux/action-creators'
import Character from './Character';

const Characters = () => {
    const [character, setCharacter] = useState(1);
    const { characters, isLoading } = useSelector(store => store);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCharacters(character));
    }, [dispatch, character])






    return (

        <Container style={{ width: '320px' }}>
            {isLoading && (<h1 style={{ color: 'red' }}>LOADING</h1>)}
            {!isLoading && <Character {...characters} />}
            <div className='d-flex justify-content-center'>
                <Button disabled={character === 1} className='mt-1' onClick={() => setCharacter(prevCharacter => prevCharacter - 1)}>Prev</Button>
                <Button className='mt-1 ml-1' onClick={() => setCharacter(prevCharacter => prevCharacter + 1)}>Next </Button>
            </div>

        </Container>
    )
}

export default Characters;






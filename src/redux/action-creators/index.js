import {
    START_CHARACTERS_LOADING,
    END_CHARACTERS_LOADING,
    SET_CHARACTERS,
} from '../action-types'


const startCharactersLoading = () => ({ type: START_CHARACTERS_LOADING })
const endCharactersLoading = () => ({ type: END_CHARACTERS_LOADING })
const setCharacters = (payload) => ({ type: SET_CHARACTERS, payload })
const loadCharacters = (id) => async(dispatch) => {
    try {
        dispatch(startCharactersLoading(id))
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const json = await resp.json();
        dispatch(setCharacters(json))
       
  
      }
      catch (e) {
        console.error(e)
      }
      finally{
        dispatch(endCharactersLoading())
      }
    }
export {
    startCharactersLoading,
    endCharactersLoading,
    setCharacters,
    loadCharacters
}
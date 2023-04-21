import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPost } from '../../redux/slice/postSlice'
import './searchForm.css'

const SearchPost = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (search === ''){
            alert ('please insert a post id')
        }        
        else{
            
            dispatch(searchPost(search))
        }
    }
    const changeHandler = (e) =>{
        setSearch(e.target.value)
    }

  return (
    <div className="form-header">
        <div>
            <h2>Post List App</h2>
            <p>This project is a simple react redux 
                project that fetches data with search functionality 
                from an API 
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Seach for a post id'
            type='text'
            value={search}
            onChange={changeHandler}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchPost
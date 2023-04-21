import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchPost from '../searchField/searchPost'
import { fetchPosts } from '../../redux/slice/postSlice' 
import './post.css'


const PostList = () => {
  const dispatch = useDispatch()
  const {posts, loading, error} = useSelector((state) =>{
   return state.posts
  })
   useEffect(() =>{
      dispatch(fetchPosts())
   }, [])

  return (
    <>
    <SearchPost/>
    <div className="postList">
        <h1>Total posts {posts.length}</h1>
        {
          loading ? (<h2>Loading...</h2>):
          error ? (<h2 style={{color: 'red'}}>{error.response.status && 'No post Found'}</h2>) : (
          posts.map((post) =>{
          return(
          <div key={post.id} className="postDetails">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
            )}))
        }
    </div>
    </>
  )
}

export default PostList

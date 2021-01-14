import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducer'

// const functionsCount = new Set()

export const UserContext = React.createContext()
export const PostContext = React.createContext({
    posts: []
})

function App() {
    const initialPostState = React.useContext(PostContext)
    const [state, dispatch] = React.useReducer(postReducer, initialPostState)
    const [user, setUser] = React.useState('')
    //   const [posts, setPosts] = React.useState([])
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please log in'
    }, [user])

    //   const handleAddPost = React.useCallback((newPost) => {
    //     setPosts([newPost, ...posts])
    //   }, [posts])

    // functionsCount.add(handleAddPost)
    // console.log('FUNCTIONS COUNT: ', functionsCount)

    if (!user) {
        return <Login setUser={setUser} />
    }
    return (
        <PostContext.Provider value={{ state, dispatch }}>
            <UserContext.Provider value={user}>
                <Header user={user} setUser={setUser} />
                <CreatePost user={user} />
                <PostList posts={state.posts} />
                {/* <button onClick={() => setCount(prevCount => prevCount + 1)}> {count} </button> */}
            </UserContext.Provider>
        </PostContext.Provider>
    )
}
export default App

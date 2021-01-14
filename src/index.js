import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)

// ---------------- CODE FROM Week 1 - Videos 1 and 2 - REACT CRASH COURSE -----------------------

// const year = 2020
// const baseUrl = 'https://api.github.com/users/'
// const isAuthenticated = true
//   const people = ['John', 'Jacob', 'Jesus']

// Video / Lesson #2 - Hooks Deep Dive

// Example of the type of construct / code you are replacing
// with React's "state" and "hooks"

// const app = document.getElementById('app')
// app.innerHTML = handleChange()
// const [username, setUsername] = React.useState('')
// const [user, setUser] = React.useState(null)
// const searchInput = React.useRef()

// React.useEffect(() => {
//   getUser()
//   // console.log()
//   // .then(response => response.json())
//   // .then(data => setUser(data))
// }, [])

// function handleClearInput() {
//   searchInput.current.value = ''
//   searchInput.current.focus()
// }

// async function getUser() {
//   const response = await fetch(`${baseUrl}${username}`)
//   const data = await response.json()
//   setUser(data)
// }

// return (
//   <div>
//     <input
//       type='text' placeholder='Input username' onChange={event => setUsername(event.target.value)}
//       ref={searchInput}
//     />
//     <button onClick={getUser}>Search</button>
//     <button onClick={handleClearInput}>Clear</button>
//     {
//       user ? (
//         <div>
//           <h2>{user.name}</h2>
//           <p>{user.bio}</p>
//           <img alt='avatar' src={user.avatar_url} style={{ height: 50 }} />
//         </div>
//       ) : (
//           <p>Loading...</p>
//         )
//     }
//   </div>

// const [inputValue, setInputValue] = React.useState('')
// const [yearsExperience, setYearsExperience] = React.useState(0)

// const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0 })

// React.useEffect(() => {
//   document.addEventListener('mousemove', handleMouseMove)

//   return document.removeEventListener('mousemove', handleMouseMove)
// }, [])

// function handleMouseMove (event) {
//   setMousePosition({ x: event.pageX, y: event.pageY })
// }

// return (
//   <div>
//     <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
//   </div>
// )
// More verbose equivalent of above array destructuring syntax

// const inputState = React.useState('')
// const inputValue = inputState[0]
// const setInputValue = inputState[1]

// function handleChange(event) {
//   setInputValue(event.target.value)
// }

// const [language, setLanguage] = React.useState('python')

//   const [developerInfo, setDeveloperInfo] = React.useState({
//     name: '',
//     language: 'python',
//     yearsExperience: 0,
//     isEmployed: false
//   })

//   React.useEffect(() => {
//     document.title = developerInfo.name
//     console.log('RUNS')
//   }, [developerInfo.name])

//   function handleChangeName(event) {
//     setDeveloperInfo({
//       ...developerInfo,
//       name: event.target.value
//     })
//   }

//   function handleChangeLanguage() {
//     setDeveloperInfo({
//       language: 'JavaScript',
//       yearsExperience: 0
//     })
//   }

//   function handleChangeYearsExperience(event) {
//     setDeveloperInfo({
//       ...developerInfo,
//       yearsExperience: event.target.value
//     })
//   }

//   function handleChangeIsEmployed() {
//     setDeveloperInfo((prevState) => ({
//       ...prevState,
//       isEmployed: !prevState.isEmployed
//     }))
//   }

//   return (
//     // <div id='app'>
//     //   <input onChange={handleChange} />
//     //   <p>{inputValue}</p>
//     // </div>
//     <div>
//       <button onClick={handleChangeIsEmployed}>Toggle Employment Status</button>
//       <button onClick={handleChangeLanguage}>Change Language</button>
//       <p>My Employment Status is: {developerInfo.isEmployed ? 'True' : 'False'}</p>
//       <div>
//         <input type='number' onChange={handleChangeYearsExperience} />
//       </div>
//       <div>
//         <input type='text' onChange={handleChangeName} placeholder='Change Name' />
//       </div>
//       <p>I am learning {developerInfo.language} </p>
//       <p>I have {developerInfo.yearsExperience} years of experience </p>
//     </div>
//   )

// function NewPageSimulator () {
//   return <div>New Page</div>
// }

// setTimeout(() => { ReactDOM.render(<NewPageSimulator />, rootNode) }, 2000)
// From Video / Lesson - #1
// React Core Concepts

// // const greeting = (

// // )
// const isReactUser = true

// // function sayGreeting() {
// //     if (isReactUser) {
// //         return greeting
// //     } else {
// //         return <div>Hello JavaScript</div>
// //     }
// // }

// function App() {
//   const people = ['John', 'Jacob', 'Jesus']

//   let value

//   React.useState();

//   function handleChange (event) {
//     value = event.target.value
//     console.log(value)
//   }

//   // Example of the type of construct / code you are replacing
//   // with React's "state" and "hooks"

//   // const app = document.getElementById('app')
//   // app.innerHTML = handleChange()

//   return (
// <Layout>
//   {isAuthenticated ? (
//     <>
//       <Header username='Grogu' />
//       <SignOut />
//     </>
//   ) : <Login />}
//   {/* {isAuthenticated && <SignOut />} */}
//   <ul>
//     {people.map((person, index) => (
//       <Person key={index} person={person} />
//     ))}
//     <input onChange={handleChange} />
//   </ul>

//   <footer>Copyright 2020</footer>
// </Layout>

//   )
// }

// function Header(props) {
//   return <div>Hello {props.username}
//     <p>in {year}</p>
//   </div>
// }

// function Layout(props) {
//   return <div style={{ background: 'palegoldenrod' }}>  {props.children}
//   </div>
// }

// function Login() {
//   return <p>Please log in!</p>
// }

// function SignOut() {
//   return <button>Sign Out</button>
// }

// function Person(props) {
//   function handleClick(event) {
//     alert(props.person)
//     console.log(event)
//   }

//   return <li onClick={handleClick}>{props.person}</li>
// }

// const Header = () => {
//   return <div>Hello React!
//     <p>in {year}</p>
//          </div>
// }

// class Header extends React.Component {
//   render () {
//     return <h1>FROM CLASS</h1>
//   }
// }

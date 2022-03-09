import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import NavBar from './components/layout/NavBar';
import { Box, Flex } from '@chakra-ui/react'
import FavNotes from './components/notes/FavNotes';
import NoteDetails from './components/notes/NoteDetails';
import EditForm from './components/notes/EditForm';
import SignIn from './components/sign/SignIn';
import SignUp from './components/sign/SignUp'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Cover from './components/Home/Cover';
import Footer from './components/layout/Footer';
import SideBar from './components/layout/SideBar';
import { useNavigate } from 'react-router-dom';
import Draft from './components/Home/Draft';


function App() {
  const [user, setUser] = React.useState(null)
  const navigate = useNavigate()


  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(),
      userAuth => {
        if (userAuth) {
          const u = {
            email: userAuth.email,
            UID: userAuth.uid
          }
          console.log('userA', userAuth)
          navigate('/home')
          setUser(u)
        } else { console.log('not a user', userAuth?.emailVerified); setUser(null);navigate('/')}
      }
    )
    return unsubscribe
      // eslint-disable-next-line 
  }, [])

  return (
    <Box style={{ minHeight: '100vh' }} >

        {user ?
          (<Flex w='full'>
            <Box h='100vh'   p='5px'>
              <SideBar/>
            </Box>
             <Box p='10px' ml={['40px','50px','80px']} pt='70px' flexGrow={2}>
             <Routes>
            <Route exact path='/edit/:id' element={<EditForm />} />
            <Route exact path='/notes/:id' element={<NoteDetails />} />
            <Route exact path='/favorites' element={<FavNotes />} />
            <Route exact path='/add' element ={<Draft/>} />
            <Route path='/home' element={<Home />} />
          </Routes>
             </Box>
           </Flex>) :
          <Box>
            <NavBar />
            <Routes>
              <Route exact path='/signin' element={<SignIn />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route path='/' element={<Cover />} />
            </Routes>
          </Box>

        }

        <Footer />
    </Box>
  );
}

export default App;

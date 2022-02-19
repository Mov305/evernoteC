import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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


function App() {
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(),
      userAuth => {
        if (userAuth) {
          const u = {
            email: userAuth.email,
            UID: userAuth.uid
          }
          console.log('userA', userAuth)
          setUser(u)
        } else { console.log('not a user', userAuth?.emailVerified); setUser(null) }
      }
    )
    return unsubscribe
  }, [])

  return (
    <Box style={{ minHeight: '100vh' }} >
      <BrowserRouter>

        {user ?
          (<Flex>
            <Box>
              <SideBar/>
            </Box>
             <Box>
             <Routes>
            <Route exact path='/edit/:id' element={<EditForm />} />
            <Route exact path='/notes/:id' element={<NoteDetails />} />
            <Route exact path='/favorites' element={<FavNotes />} />
            <Route exact path='/signin' element={<SignIn />} />
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
      </BrowserRouter>
    </Box>
  );
}

export default App;

import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import NavBar from './components/layout/NavBar';
import {Box} from '@chakra-ui/react'
import FavNotes from './components/notes/FavNotes';
import NoteDetails from './components/notes/NoteDetails';
import EditForm from './components/notes/EditForm';
import SignIn from './components/sign/SignIn';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Cover from './components/Home/Cover';
import Footer from './components/layout/Footer';


function App() {
  const [user,setUser] = React.useState(null)
  React.useEffect(()=>{
    const unsubscribe = onAuthStateChanged(getAuth(),
      userAuth=>{
        if(userAuth?.emailVerified){
          const u={
            email:userAuth.email,
            UID:userAuth.uid
          }
          console.log('userA',userAuth)
          setUser(u)
        }else{console.log('not a user',userAuth?.emailVerified);setUser(null)}
      }
    )
    return unsubscribe
  },[])

  return (
  <Box  style={{minHeight:'100vh'}} >
    <BrowserRouter>
    <NavBar/>
    <Switch>
      {user?
      (<Switch>
        <Route exact path='/edit/:id' component={EditForm}/>
        <Route exact path='/notes/:id' component={NoteDetails}/>
        <Route exact path='/favorites' component={FavNotes}/>
        <Route exact  path='/signin' component={SignIn}/>
        <Route path='/home' component={Home}/>
      </Switch>
      ):
      <Switch>
        <Cover/>
        
        <SignIn/>
      </Switch>
      }
      
    </Switch>
    <Footer/>
    </BrowserRouter>
  </Box>
  );
}

export default App;

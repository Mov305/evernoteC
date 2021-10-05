import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import NavBar from './components/layout/NavBar';
import {Box} from '@chakra-ui/react'
import FavNotes from './components/notes/FavNotes';
import NoteDetails from './components/notes/NoteDetails';
import EditForm from './components/notes/EditForm';


function App() {

  return (
  <Box bgColor='gray.100' style={{minHeight:'100vh'}}>
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path='/edit/:id' component={EditForm}/>
      <Route path='/notes/:id' component={NoteDetails}/>
      <Route path='/favorites' component={FavNotes}/>
      <Route path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
  </Box>
  );
}

export default App;

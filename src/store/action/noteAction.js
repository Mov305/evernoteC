export const addNote = (note)=>{
    return (dispatch,getState,{getFirestore})=>{
       const firestore = getFirestore()
       firestore.collection('notes')
       .add({
           ...note,
           favorite:false,
           createdAt:new Date()
       })    
       .then(()=>{
           console.log('add the note successfully')
       })
       .catch(err=>console.log('error',err))
    }
}

export const deleteNote=(id)=>{

    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('notes')
        .doc(id).delete()   
        .then(()=>{
            console.log('the note is deleted successfully')
        })
        .catch(err=>console.log('error',err))
     }
}

export const toggleFav=(note)=>{

    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('notes')
        .doc(note.id).update({
            favorite:!note.favorite
        })  
        .then(()=>{
            console.log('fav toggled successfully')
        })
        .catch(err=>console.log('error',err))
     }
}
export const editNote=(note)=>{

    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore()
        firestore.collection('notes')
        .doc(note.id).update({
            title:note.title,
            content:note.content,
        })  
        .then(()=>{
            console.log('fav toggled successfully')
        })
        .catch(err=>console.log('error',err))
     }
}
export const addUserData=({firstName,lastName,country,address,phoneNumber})=>{
    const data={
        firstName,
        lastName,
        country,
        address,
        phoneNumber
    }
    return{
        type:'ADD_DATA',
        payload:data
    }
}
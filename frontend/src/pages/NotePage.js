import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { ReactComponent as ArrowLeft} from '../assets/img/arrow-left.svg'
import axios from "axios"
import {
  Form,
  Input,
} from "reactstrap"

const NotePage = () => {
    const navigate = useNavigate()
    const noteId = useParams()
    const id = noteId?.id
    let [title, setTitle] = useState("")
    let [body, setBody] = useState("")
    let [note, setNote] = useState(null)

    useEffect(()=> {

        getNote()
    }, [id])

    let getNote = async ()=> {
      if (id === 'new') return
      let response = await fetch (`${process.env.REACT_APP_API_URL}/api/notes/${id}/`)
      let data = await response.json()
      setNote(data)
    }

    let createNote = async () => {
      let formField = new FormData()
      formField.append('title', title)
      formField.append('body',body)
      await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/api/`,
        data: formField
      }).then((response) => {
        navigate('/')
      })
      
    }

    let updateNote = async () => {
      
      fetch(`${process.env.REACT_APP_API_URL}/api/notes/${id}/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
      navigate('/')
    }

    let deleteNote = async ()=> {
      fetch(`${process.env.REACT_APP_API_URL}/api/notes/${id}/`,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      navigate('/')
    }

    let handleSubmit = () => {
      
      if(id !== 'new' && note.body === ''){
        deleteNote()
      } else if(id !== 'new'){
        updateNote()
      } else if(id === 'new' && title !== null && body !== null){
        createNote()
      } 
      
    }

  return <div className='note'>
      <div className='note-header'>
        <h3> 
            <ArrowLeft onClick={handleSubmit} />
        </h3>
       
        {id !== 'new' ? (
          <h3>{note?.title}</h3>
          ): (
            <h3></h3>
          )}

        {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
          ): (
            <button onClick={handleSubmit}>Done</button>   
          )}
      </div>
        {id !== 'new' ? (
          <textarea onChange={(e) => {setNote({ ...note, 'body': e.target.value})}} value={note?.body}></textarea>
          ): (
              <Form>
                <Input 
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Title"
                  />
                
                <textarea
                  name="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter Note"
                  />
              </Form>
          )}
  </div>;
};

export default NotePage;

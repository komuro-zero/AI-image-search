import React from 'react'
import { useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from 'react-bootstrap/Card';

// import { Field, Form, Formik } from 'formik'
// import { Button,
//     FormControl,
//     Input,
//     FormLabel,
//     FormErrorMessage,
//   } from '@chakra-ui/react'

const SearchBox = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if(!searchText){
            alert("Please add a Search text")
            return
        }
        onSearch({ searchText })
        setSearchText("")
      }
  
    return (
      <div style={{ display:"flex",justifyContent: "center"}}>
        <Card style={{width:"1000px"}}>
          <Form onSubmit={handleSubmit} style={{padding:"20px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search Image</Form.Label>
              {/* <input value={searchText} 
                      onChange={(e)=>setSearchText(e.target.value)}/> */}
              <Form.Control type="text" placeholder="Search a Picture" value={searchText} 
                      onChange={(e)=>setSearchText(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Card>
      </div>
        // <form onSubmit={handleSubmit} >
        //     <label>
        //     Search Image:
        //     <input value={searchText} 
        //            onChange={(e)=>setSearchText(e.target.value)}/>
        //     </label>
        //     <input type="submit" value="Search"/>
        // </form>
    )
  }

export default SearchBox

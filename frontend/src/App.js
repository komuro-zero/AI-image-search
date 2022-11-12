import * as React from 'react'
import Header from "./\\components\\Header"
import SearchBox from "./\\components\\SearchBox"
import SearchImage from "./\\components\\SearchImage"
import { useState,useEffect } from 'react'


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ freeAI, setfreeAI ] = useState("")
  const [ craiyon, setcraiyon ] = useState("")
  // 2. Wrap ChakraProvider at the root of your\ app
  useEffect(()=>{
    if (searchQuery.searchText !== undefined){
      let searchText= searchQuery.searchText
      let freeAIurl = `http://localhost:8000/freeaiimagegenerator?prompt=`+ JSON.stringify(searchText).slice(1,-1);
      let craiyonurl = `http://localhost:8000/craiyon?prompt=`+ JSON.stringify(searchText).slice(1,-1);
      let encodedfreeAIurl = encodeURI(freeAIurl)
      let encodedcraiyonurl = encodeURI(craiyonurl)
      fetch(encodedfreeAIurl)
        .then((res) => res.json())
        .then((data) => setfreeAI(data.message));
      fetch(encodedcraiyonurl)
        .then((res) => res.json())
        .then((data) => setcraiyon(data.message));
    }
  },[searchQuery])

  const onSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    setfreeAI("")
    setcraiyon("")
  }

  return (
    <ChakraProvider>
      <Header/>
      <SearchBox onSearch={onSearch}/>
      <SearchImage freeaiimagegenerator={freeAI} craiyon={craiyon[0]} searchQuery={searchQuery}/>
    </ChakraProvider>
  )
}

export default App
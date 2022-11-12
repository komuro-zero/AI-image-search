import { Image,Box } from '@chakra-ui/react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';
import ReactLoading from "react-loading";


const SearchImage = ({freeaiimagegenerator, craiyon, searchQuery, stablediffusionweb}) => {
  console.log("in searchimage")
  console.log(searchQuery)
  console.log(freeaiimagegenerator)
  console.log(craiyon)
  return (
    <div style={{padding:"50px"}}>
      <CardGroup>
        <Card>
          {freeaiimagegenerator ==="" && searchQuery !== "" ? 
            <div style={{ display:"flex",justifyContent: "center", paddingTop: "100px", paddingBottom: "80px"}}>
              <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
            </div> 
            :<Card.Img variant="top" src={freeaiimagegenerator} />}
          

          <Card.Body>
            <Card.Title>freeaiimagegenerator</Card.Title>
            <Card.Text>
              freeaiimagegenerator
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://freeimagegenerator.com/">Go to website</a>
          </Card.Footer>
        </Card>
        <Card>
          {craiyon === undefined && searchQuery !== "" ? 
            <div style={{ display:"flex",justifyContent: "center", paddingTop: "100px", paddingBottom: "80px"}}>
              <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
            </div>
            :<Card.Img variant="top" src={craiyon} />}
          <Card.Body>
            <Card.Title>craiyon</Card.Title>
            <Card.Text>
              craiyon
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://www.craiyon.com/">Go to website</a>
          </Card.Footer>
        </Card>
        {/* <Card>
          {stablediffusionweb ==="" && searchQuery !== "" ? 
            <div style={{ display:"flex",justifyContent: "center", paddingTop: "100px", paddingBottom: "80px"}}>
              <ReactLoading type="bubbles" color="#0000FF" height={100} width={50} />
            </div> 
            :<Card.Img variant="top" src={stablediffusionweb} />}
          <Card.Body>
            <Card.Title>Stable Diffusion Web</Card.Title>
            <Card.Text>
              Stable diffusion web
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://stablediffusionweb.com/">Go to website</a>
          </Card.Footer>
        </Card> */}
      </CardGroup>
    </div>
  )
}

export default SearchImage

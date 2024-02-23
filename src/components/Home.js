import { Link } from "react-router-dom"
import Main from "./Main"
import Mission from "./Missions"
import Section4 from "./Section-4"
import Section3 from "./Section3"
import Section5 from "./Section-5"
import Section6 from "./Section-6"
import Footer from "./Footer"

const Home = ()=>{
    return(
        <div>
            <Link to={'/'}>
              <Main/>
        <Mission/> 
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
            </Link>
              
        </div>
   

    )
}

export default Home;
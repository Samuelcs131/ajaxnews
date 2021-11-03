import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import axios from "axios";
import Card from "../components/Card"

const Category = () => {
    const { categoria } = useParams()
  
 
    useEffect( ()=>{
        axios.get("http://localhost:3031/noticias").then(response => {
        const procura = response.data.filter(noticias => noticias.categoria === categoria)
        setNoticiasValue(procura)
        })
        
    },[categoria])

    const [noticiasValue, setNoticiasValue] = useState([])



    return ( 
        <div className="container pb-4">
        <Nav/>
        <h3 className="pb-4 my-5 fst-italic border-bottom">Principais artigos sobre {categoria}</h3>

        {noticiasValue.length !== 0 ? 
        (noticiasValue.map((value, position)=>{
          return(<Card noticias={value} key={position}></Card>)
        }))
        :
        ( <h4>Nada encontado</h4> ) }

        <Footer/>
        </div>
     );
}
 
export default Category;
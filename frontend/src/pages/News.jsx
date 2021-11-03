import Footer from "../components/Footer";
import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const News = () => {

 

    const {id} = useParams()
 
    useEffect( ()=>{
        axios.get("http://localhost:3031/noticias").then(response => {
        const procura = response.data.filter(noticias => noticias.idnoticias === Number(id))
        setValues(procura[0])
        })
    },[id])
    
    const [valuesInputs, setValues] = useState({titulo: '', descricao: '', texto: '', autor: '', categoria: '', data: '0001-01-01'})  

    // FORMATAR DATA
    let dataForm = new Date(valuesInputs.data)
    let dataNoticia = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'long'}).format(dataForm)


    return ( 
        <div className="container pb-4">
        <Nav/>
        
        <h1 className="mt-5">{valuesInputs.titulo}</h1>
        <h5>{valuesInputs.descricao}</h5>
        <span className="mt-5 d-block">Por: {valuesInputs.autor}</span>
        <p>{dataNoticia}</p>
        <hr />
        <p>{valuesInputs.texto}</p>

        <Footer/>
        </div> 
     );
}
 
export default News;
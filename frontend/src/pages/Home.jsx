import { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import axios  from "axios";
import Footer from "../components/Footer";
import MainNew from "../components/MainNew";

const Home = () => {
    useEffect(()=>{
        axios.get("http://localhost:3031/noticias").then(response => {
        setListNoticias(response.data)})
    },[])

    const [listNoticias, setListNoticias] = useState('')
    
     
 
 
 
    
    return(
        <div className="container pb-4">
            <Nav/>

            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Todos artigos em um só lugar</h1>
            <p className="lead my-3">Esse site foi desenvolvido com NodeJs + ReactJs + MySQL + Axios.</p>
            <p className="lead mb-0"><a href="/painel-noticias" className="text-white fw-bold">Gerenciar artigos</a></p>
            </div>
            </div>
            
            {/* ULTIMAS NOTICIAS */}
            <div className="row mb-2">
                {listNoticias !== '' && (
                    <>
                    <MainNew noticia={listNoticias[listNoticias.length - 1]}></MainNew>
                    <MainNew noticia={listNoticias[listNoticias.length - 2]}></MainNew>
                    </>
                )}
                
                
            </div>
           
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Principais noticias </h3>
            { listNoticias !== '' ?
             ( listNoticias.map((value,position) => <Card noticias={value} key={position}></Card> )
            )
            :
            (<h4>Nenhuma artigo encontrado</h4>)
        }

            <Footer/>
        </div>
     );
}
 
export default Home;
 
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import CardEdit from '../components/CardEdit'
import { useEffect, useState } from "react";
import axios from "axios";

const PanelNews = () => {



useEffect(()=>{
    axios.get("http://localhost:3031/noticias").then(response => { 
        setListNoticias(response.data.filter(
            dados => dados.titulo.includes(searchNewsValue)
        ))
    })
})

// TODAS AS NOTICIAS
const [listNoticias, setListNoticias] = useState('')

// PESQUISAR NOTICIA
const [searchNewsValue, setSearchNewsValue]= useState('')

// PEGAR VALOR INPUT PESQUISA
const handleNews = (event) => {
    setSearchNewsValue(event.target.value)
} 


    return (
 
        <>
        <div className="container pb-4">
        <Nav></Nav>          
        <section className="py-5 text-center container">
        <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Administre suas postagens</h1>
        <p className="lead text-muted">Adicione novos artigos ao seu site</p>
        <p>
        <a href="/painel-noticias/nova" className="btn btn-secondary my-2">Cadastrar artigo</a>
        </p>
        </div>
        </div>
        </section>

{/* PESQUISAR NOTICIA */}
<div className="row mx-1">
<div className="col-12">
<div className="input-group mb-3 input-group-lg">
<input type="text" className="form-control" onChange={handleNews} placeholder="Buscar notícia"/> 
<span class="input-group-text" id="basic-addon2">Pesquisar</span>
</div>
</div>
</div>

<div className="album py-5">
<div className="container">

<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">

{listNoticias.length === 0 ? 
(<h4>Nenhum resultado encontrado</h4>)
:
( listNoticias.map((data, position) => <CardEdit noticias={data} key={position}/>)) 
}

 

</div>
</div>
</div>







        <Footer></Footer>
        </div>
        </>
     );
}

export default PanelNews;
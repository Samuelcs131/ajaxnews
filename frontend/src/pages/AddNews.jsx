import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from 'axios'
import Swal from 'sweetalert2'
import Footer from "../components/Footer"; 

const AddNews = () => {

const [valuesInputs, setValues] = useState({titulo: '', descricao: '', texto: '', autor: '', categoria: ''})

// PEGAR VALORES
const handleChangeValues = value => {
    setValues( dados => ({...dados, [value.target.name]: value.target.value, }))
}

// PEGAR DATA
const dayNow = Intl.DateTimeFormat('pt-BR', {day: 'numeric'}).format() 
const monthNow = Intl.DateTimeFormat('pt-BR', {month: 'numeric'}).format() 
const yearNow = Intl.DateTimeFormat('pt-BR', {year: 'numeric'}).format() 
const dateNow = yearNow+'-'+monthNow+'-'+dayNow

// TRATAMENTO DE DADOS E ENVIO AO BACKEND
const [errosForm, setErrosForm] = useState([])

const handleSubmit = async () => { 

// TRATAMENTO DE CAMPOS
if(valuesInputs.titulo === '' || valuesInputs.descricao === '' || valuesInputs.categoria === '' || valuesInputs.texto === '' || valuesInputs.autor === '')
{ setErrosForm([...errosForm,{mensagem: 'Todos os campos devem ser preenchidos'},])} 
else {
// ENVIA OS DADOS PARA O BACKEND
await axios.post("http://localhost:3031/adicionar",{ titulo: valuesInputs.titulo, descricao: valuesInputs.descricao, categoria: valuesInputs.categoria, texto: valuesInputs.texto, data: dateNow,autor: valuesInputs.autor})
.then( valuesResponse => {
if(valuesResponse.data === 'conectado'){ // MODAL SUCESSO
Swal.fire({ icon: 'success',
title: 'Dados enviado com sucesso!',
confirmButtonColor: '#0d6efd'
})
setValues({titulo: '', descricao: '', texto: '', autor: '', categoria: ''})
}

if(valuesResponse.data === 'erro'){ // MODAL ERRO
Swal.fire({ icon: 'error',
title: 'Oops...',
text: 'Erro ao enviar os dados!',
confirmButtonColor: '#0d6efd'
})}}

).catch( (erro) => { // MODAL ERRO
console.log(erro)
Swal.fire({ icon: 'error',
title: 'Oops...',
text: 'Erro na conexão com a API',
confirmButtonColor: '#0d6efd'
})})  
}
} 


return (
<>
<div className="container pb-4">
<Nav></Nav>

{/* MENSAGEM DE ERRO */}
{errosForm.map((erros,position)=>{ return <div className="alert alert-danger alert-dismissible fade show" key={position} role="alert">
<strong>Erro!</strong> {erros.mensagem}
<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
})}
{/* ./MENSAGEM DE ERRO */}

<h3 className="mt-5">Novo artigo</h3>

<div className="card mt-3 mb-5">
    <div className="card-body">
        <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
            <input type="text" className="form-control" name="titulo" onChange={handleChangeValues}  value={valuesInputs.titulo}/>
        </div>
        <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input type="text" className="form-control" name="descricao" onChange={handleChangeValues}  value={valuesInputs.descricao} />
        </div>
        <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Categoria</label>
            <select className="form-select" name="categoria" onChange={handleChangeValues}  value={valuesInputs.categoria}>
                <option value="" defaultValue>Selecionar</option>
                <option value="HTML5">HTML5</option>
                <option value="CSS3">CSS3</option>
                <option value="JavaScript">JavaScript</option>
                <option value="NodeJs">NodeJs</option>
                <option value="Sass">Sass</option>
                <option value="ReactJs">ReactJs</option>
                <option value="MySQL">MySQL</option>
                <option value="Design">Design</option>
                <option value="Angular">Angular</option>
                <option value="SweetAlert2">SweetAlert2</option>
                <option value="Pyhton">Pyhton</option>
                <option value="Java">Java</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="texto" className="form-label">Texto</label>
            <textarea className="form-control" name="texto" onChange={handleChangeValues}  value={valuesInputs.texto}></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="autor" className="form-label">Autor</label>
            <input type="text" className="form-control" name="autor" onChange={handleChangeValues}  value={valuesInputs.autor} />
        </div>
        </div> 
    <div className="card-footer">
        <a href="/painel-noticias" className="btn btn-secondary me-3">Voltar</a>
        <button className="btn btn-primary" onClick={()=>handleSubmit()}>Cadastrar</button>
    </div>
</div>

<Footer></Footer>
</div>


</>
);
}
 
export default AddNews;
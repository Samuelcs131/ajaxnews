import axios from "axios"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const CardEdit = ({noticias}) => {
// FORMATAR DATA
let dataForm = new Date(noticias.data)
let dataNoticia = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'long'}).format(dataForm)

// APAGA POST
const deletePost =  () => {
Swal.fire({
  title: 'Tem certeza?',
  text: "A eliminação dos dados é irreversível!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Sim, deletar'
}).then( async (result) => {
  if (result.isConfirmed) {
     

  await axios.delete('http://localhost:3031/apagar',{
      data: {idnoticias: noticias.idnoticias}
  })
  .then(response => {
    if(response.data === 'deletado'){
      
      Swal.fire({
        title: 'Deletado!',
        text: 'O poste foi deletado com sucesso!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
      })
    }})
  .catch(erro => {
    Swal.fire({
      title: 'Ops...',
      text: 'Houve um erro na conexão com o banco de dados!',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    })
  })

 }})
}

 

    return (

    <article className="col">
          <div className="card shadow-sm"> 
            <div className="card-body">
            <h5 className="card-title">{noticias.titulo}</h5>
              <p className="card-text">{noticias.descricao}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button className="btn btn-sm btn-outline-danger" onClick={()=>{ deletePost()}}>Excluir</button>
                  <Link to={{pathname: `/painel-noticias/editar/${noticias.idnoticias}`}} className="btn btn-sm btn-outline-success">Editar</Link>
                </div>
                <small className="text-muted">{dataNoticia}</small>
              </div>
            </div>
          </div>
    </article>
     );
}
 
export default CardEdit;

import { Link } from "react-router-dom";

const MainNew = ({noticia}) => { 
// FORMATAR DATA
let dataForm = new Date(noticia.data)
let dataNoticia = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'long'}).format(dataForm)

    return ( 
    <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">{noticia.categoria}</strong>
            <h3 className="mb-0">{noticia.titulo}</h3>
            <div className="mb-1 text-muted">{noticia.descricao}</div>
            <p className="mb-auto">{dataNoticia}</p>
            <Link className="stretched-link" to={{ pathname: `/noticia/${noticia.idnoticias}`}}>Ver mais</Link>
            </div>
        </div>
    </div>
     ); 
}

export default MainNew;
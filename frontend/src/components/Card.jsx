import { Link } from "react-router-dom";

const Card = ({noticias}) => {
let dataForm = new Date(noticias.data)
let dataNoticia = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'long'}).format(dataForm)

    return (

        <article className="mb-5">
            <Link to={{ pathname: `/noticia/${noticias.idnoticias}`}}>
                <h2 className="blog-post-title text-dark">{noticias.titulo}</h2></Link>
            <p className="blog-post-meta">Por: {noticias.autor}<br /><span> {dataNoticia}</span></p>
            <p>{noticias.descricao}</p>
            <hr /> 
            </article>
     );
}
  
export default Card;


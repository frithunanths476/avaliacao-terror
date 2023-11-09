import Estrela from "./Estrela";
import style from "./Filme.module.css"
import {useState} from "react";

function Filme(prop) {
    const [clique,setClique] = useState(0)

    return(
        <div className={style.cartaz}>
            <img src={prop.img} />
            <p>{prop.nome}</p>
            <Estrela clique={clique} setClique={setClique}></Estrela>
        </div>
    )
}

export default Filme
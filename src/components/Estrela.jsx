import css from "./Estrela.module.css"

function Estrela(props){

    function clicar(valor){
        props.setClique(valor)
    }

    return(
        <div className={css.botao}>
            <button onClick={() => clicar(1)}><i className={"fa-solid fa-star " + (props.clique >= 1 && css.pinta)}></i></button>
            <button onClick={() => clicar(2)}><i className={"fa-solid fa-star " + (props.clique >= 2 && css.pinta)}></i></button>
            <button onClick={() => clicar(3)}><i className={"fa-solid fa-star " + (props.clique >= 3 && css.pinta)}></i></button>
            <button onClick={() => clicar(4)}><i className={"fa-solid fa-star " + (props.clique >= 4 && css.pinta)}></i></button>
            <button onClick={() => clicar(5)}><i className={"fa-solid fa-star " + (props.clique >= 5 && css.pinta)}></i></button>
        </div>
    )
}

export default Estrela
import Cantidad from "../components/estado";
const PaginaTres =() => {
    return (
        <div className="contPagTres">
            <h1></h1>

            <div className="ContainerBebidas">
                <div className="imgBebidas1">
                <img src="https://www.animalgourmet.com/wp-content/uploads/2019/08/img_1533-1.jpg" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgBebidas2">
                <img src="https://m.media-amazon.com/images/I/31HFZvsvb6L._SS400_.jpg" alt="" />
                <p>cantida</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgBebidas3">
                <img src="https://www.cocinista.es/download/bancorecursos/recetas/receta-bubble-tea-te-tapioca.jpg" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default PaginaTres;
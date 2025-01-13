import Cantidad from "../components/estado";
const PaginaUno =() => {
    return (
        <div className="contPagUno">
            <h1></h1>

            <div className="ContainerSushi">
                <div className="imgSushi1">
                <img src="https://media.istockphoto.com/id/1190771420/es/foto/cocina-japonesa-conjunto-con-sushi-cl%C3%A1sico-de-nigiri-uramaki-caliente-de-fusi%C3%B3n-philadelphia-y.jpg?s=1024x1024&w=is&k=20&c=fC4Y9VVmyd4KM_F5q0frByXn56-iS71sT0yEhrDr850=" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgSushi2">
                <img src="https://media.istockphoto.com/id/1053854126/es/foto/todo-lo-que-pueden-comer-sushi.jpg?s=1024x1024&w=is&k=20&c=uvw_1cUUlh05YOwbNjbYC_1XH893Wav3B2GEKkZneFM=" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgSushi3">
                <img src="https://media.istockphoto.com/id/1276446410/es/foto/set-de-sushi-y-maki.jpg?s=1024x1024&w=is&k=20&c=qrYYSpFshU1wsyVN_uOBrqqmZA_Ulay7dPhw590HBTo=" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default PaginaUno;
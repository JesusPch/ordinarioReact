import Cantidad from "../components/estado";
const PaginaDos =() => {
    return (
        <div className="contPagDos">
            <h1></h1>

            <div className="ContainerOni">
                <div className="imgOni1">
                <img src="https://carolinarice.com/wp-content/uploads/2019/05/Spanish-Inspired-Shirmp-Onigiri-FINAL-1.jpg" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                
                <div className="imgOni2">
                <img src="https://www.justonecookbook.com/wp-content/uploads/2023/09/Onigiri-Japanese-Rice-Balls-2053-II.jpg" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="imgOni3">
                <img src="https://veggieanh.com/wp-content/uploads/2023/07/Yaki-Onigiri-3.jpg" alt="" />
                <p>cantidad</p>
                <Cantidad />
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
     </div>
    );
}

export default PaginaDos;
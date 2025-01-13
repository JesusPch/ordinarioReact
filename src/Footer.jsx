
import { Link } from 'react-router-dom';

const Footer =() => {
    return(
        <div className="containerFooter">
            <div className="footer">
                <div className="NombrePag">
                    <h2>Onigiris Fic</h2>
                </div>
                <div className="Inf">
                    <p>OnigirisFic S.A de C.V</p>
                    <p>Producto Perecedero</p>
                    <p>Vicitanos Nuestras Suscursales</p>
                </div>
                <div className="Enlaces">
                <Link to="/PaginaCuatro">Ubicacion</Link>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;
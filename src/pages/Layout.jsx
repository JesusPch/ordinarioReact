import { Outlet, NavLink} from "react-router-dom"


const Layout =() => {
    return  <div className="contenedor">
        <nav>
         <ul>
            <li>
                <NavLink to="/" >Sushis</NavLink>
            </li>
            <li>
                <NavLink to="/PaginaDos">Onigiris</NavLink>
            </li>
            <li>
                <NavLink to="/PaginaTres">Bebidas</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout;
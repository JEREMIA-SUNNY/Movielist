import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        //headers and nav button 
        <div className="nav">
            <div className="headtxt">Welcomee To IMDB</div>
            <div className="nav3">
              
                <div className="nav2">
                    <Link to="/Moveielist" style={{ color: "white", textDecoration: 'none' }}>Movie list</Link>
                </div>

                <div className="nav2">
                    <Link to="/Contact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
                </div>

                <div className="nav2">
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
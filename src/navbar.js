import { Link } from "react-router-dom";
const navbar = () => {
    return ( 
        <div className="navbar">
            <p>my lotr viki</p>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/add">add new</Link>
            </div>
            
        </div>
    );
}
 
export default navbar;
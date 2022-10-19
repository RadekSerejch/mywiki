import ListItem from "./listItem";
import UseFetch from "./useFetch";
import { useState } from "react";

const Content = () => {
    
    const [btnClick, setBtnClick] = useState(1);
    const { error, isPending, data: items } = UseFetch('http://localhost:8000/items',btnClick)

    const DeleteClicked = () =>{
       setBtnClick(btnClick*-1);
    }

    return ( 
        <div className="content">
            <h1>all notes</h1>

        

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { items && <ListItem items={items} btnClick = {DeleteClicked}/> }

        </div>
    );
}
 
export default Content;

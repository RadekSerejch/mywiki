import ListItem from "./listItem";
import UseFetch from "./useFetch";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { red } from "@mui/material/colors";

const Content = () => {
    
    const [btnClick, setBtnClick] = useState(1);
    const [searchText, setsearchText] = useState("");
    const { error, isPending, data: items } = UseFetch('http://localhost:8000/items',btnClick)

    const DeleteClicked = () =>{
       setBtnClick(btnClick*-1);
    }

    const inputHandler = (e) =>{
        setsearchText(e.target.value.toLowerCase());
    }

    /*const styledField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'green',
          }
    })*/

    return ( 
        <div className="content">
            <h1>all notes</h1>
            <div className="searchbar">
            <TextField onChange={inputHandler} label="Search" sx={{'& label.Mui-focused': {color: 'black',},'& .MuiOutlinedInput-root': {
    
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  }}}></TextField>
            </div>
            
                
            

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { items && <ListItem items={items} btnClick = {DeleteClicked} filter = {searchText}/> }

        </div>
    );
}
 
export default Content;

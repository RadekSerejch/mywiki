import { useState } from "react";
import { useHistory } from "react-router-dom";

const Addnew = () => {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [author,setAuthor] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here");
        const data = {name, description, author};
        fetch('http://localhost:8000/items/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("data sent");
            history.push('/');
        })
    }

    return ( 
        <div className="content">
            <form onSubmit={handleSubmit}>
                <label>
                    <p className="inputName">Name:</p>
                    <input type = "text" required value={name} onChange = {(e) => {setName(e.target.value)}}></input>
                </label>
                <label>
                    <p className="inputName">description:</p>
                    <input className="inpDesc" type = "text" required value={description} onChange = {(e) => {setDescription(e.target.value)}}></input>
                </label>
                <label>
                    <p className="inputName">Author:</p>
                    <input type = "text" required value={author} onChange = {(e) => {setAuthor(e.target.value)}}></input>
                </label>
                <button className="btnSbmt">submit</button>
            </form>
        </div>
        
     );
}
 
export default Addnew;
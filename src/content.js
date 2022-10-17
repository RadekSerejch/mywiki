import ListItem from "./listItem";
import UseFetch from "./useFetch";
import { UseState } from "react";

const content = () => {
    const handleSubmit = () => {
        console.log("button clicked");
        const name = "galadriel";
        const description = "rings of power wonder woman";
        const author = "pepa";
        const data = {name, description, author};
        fetch('http://localhost:8000/items/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("data sent");
        })
    }

    const { error, isPending, data: items } = UseFetch('http://localhost:8000/items')

    return ( 
        <div className="content">
            <h1>some content here</h1>

        <button onClick={handleSubmit}>
        click to add data
        </button>

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { items && <ListItem items={items} /> }

        </div>
    );
}
 
export default content;

import ListItem from "./listItem";
import UseFetch from "./useFetch";

const content = () => {
    

    const { error, isPending, data: items } = UseFetch('http://localhost:8000/items')

    return ( 
        <div className="content">
            <h1>some content here</h1>

        

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { items && <ListItem items={items} /> }

        </div>
    );
}
 
export default content;

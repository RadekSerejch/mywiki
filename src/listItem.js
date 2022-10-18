

const ListItem = ({ items }) => {

    const handleClick = (id) =>{
        console.log("delete clicked" +id);
        fetch('http://localhost:8000/items/' + id, {
            method: 'DELETE'
        })
        
    }

    return (
        <div className="list">
            {items.map(item =>
                <div className="listItem" key = { item.id }>
                <div className="listContent">
                    <div className="itemHeader">
                        <h2>{ item.name }</h2>
                        <p>{ item.author }</p>
                        <button onClick={() => handleClick(item.id)}>delete</button>
                    </div>
                    <p>{ item.description }</p>
                </div>
                
            </div>    
            )}
        </div>
    );
}
 
export default ListItem;

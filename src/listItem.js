

const ListItem = (props) => {

    const handleClick = (id) =>{
        fetch('http://localhost:8000/items/' + id, {
            method: 'DELETE'
        })
        props.btnClick();
    }

    const filteredData = props.items.filter((el) => {
        if (props.filter === ''){
            return el;
        }else{
            return el.name.toLowerCase().includes(props.filter)
        }
    })

    return (
        <div className="list">
            {filteredData.map(item =>
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

const ListItem = ({ items }) => {
    return (
        <div className="list">
            {items.map(item =>
                <div className="listItem" id = { item.id }>
                <div className="listContent">
                    <div className="itemHeader">
                        <h2>{ item.name }</h2>
                        <p>{ item.author }</p>
                    </div>
                    <p>{ item.description }</p>
                </div>
                
            </div>    
            )}
        </div>
    );
}
 
export default ListItem;

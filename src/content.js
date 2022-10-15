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

    return ( 
        <div className="content">
            <h1>some content here</h1>

        <button onClick={handleSubmit}>
        click to add data
        </button>
        </div>
    );
}
 
export default content;

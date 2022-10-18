const addnew = () => {
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
        <button onClick={handleSubmit}>
        click to add data
        </button>
     );
}
 
export default addnew;
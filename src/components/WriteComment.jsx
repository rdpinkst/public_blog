function WriteComment({  id, mutation, name, setName, text, setText }) {

    function onSubmit(e) {
        e.preventDefault();
        
        const data = {username: name, comment: text, postId: id};
        if(name.length > 0 && text.length > 0) {
            mutation.mutate(data, {
            onSuccess: () => {
                setName("");
                setText("");
            }
        });
        } else {
            console.log("cant post")
        }
        
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-input">
                <label htmlFor="name">Username:</label>
                <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="form-input">
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" rows="4" name="comment" onChange={(e) => setText(e.target.value)} value={text} />
            </div>
            <div className="form-input">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default WriteComment;
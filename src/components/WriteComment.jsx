function WriteComment() {
    return (
        <form>
            <div className="form-input">
                <label htmlFor="name">Username:</label>
                <input id="name" type="text" />
            </div>
            <div className="form-input">
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" rows="4" />
            </div>
            <div className="form-input">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default WriteComment;
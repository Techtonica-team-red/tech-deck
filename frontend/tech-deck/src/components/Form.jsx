export default function Form () {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <textarea type="text" name="question" required />
            </label>
            <br/>
            <label>
                Answer:
                <textarea type="text" name="answer" required />
            </label>
            <br/>
            <label>
                Category:
                <select></select>
            </label>
            <br/>
            <label>
                Difficulty:
                <select></select>
            </label>
            <br/>
            <button type="submit">Create</button>
        </form>
    );
}
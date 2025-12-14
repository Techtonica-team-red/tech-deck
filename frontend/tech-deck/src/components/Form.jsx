import { useState } from 'react'; 

export default function Form () {
    
    const [categories, setCategories] = useState ([
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'js', label: 'JavaScript' },
        { value: 'react', label: 'React' },
    ]);

    const [category, setCategory] = useState('react');

    const difficulties = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ]

    const [difficulty, setDifficulty] = useState ('medium')

    const handleSubmit = async (event) => {}

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
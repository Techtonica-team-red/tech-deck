import { useState } from 'react'; 

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Form ({ onAddSuccess }) {
    
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

    const handleCategoryChange = (event) => {
        const value = event.target.value;

        if (value === 'add-category') {
            const newCategoryName = prompt("Enter a new category: ");

            if (!newCategoryName) return; // Do nothing if value is empty

            const categoryObj = {
                value: newCategoryName.toLowerCase().replace(/\s+/g, '-'),
                label: newCategoryName
            };

            setCategories([...categories, categoryObj]);
            setCategory(categoryObj.value);
        } else {
            setCategory(value)
        }
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            question:  event.target.question.value,
            answer: event.target.answer.value,
            category: category,
            difficulty: difficulty
        };

        try {
            const req = await fetch(`${BACKEND_URL}/api/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (req.ok) {
                const res = await req.json();
                console.log("Created card: ", res);
                event.target.reset();
                setCategory('react');
                setDifficulty('medium');
                onAddSuccess();

            } else {
                console.log('ERROR!!! Form not sent!')
            }

            console.log('Form was submitted: ', formData)
        } catch (error) {
            console.log('ERROR!!! Form not sent! Error caught.', error)
        }
    }

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
                <select value={category} onChange={handleCategoryChange}>
                    {categories.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                    <option value="add-category">Add category</option>
                </select>
            </label>
            <br/>
            <label>
                Difficulty:
                <select value={difficulty} onChange={handleDifficultyChange}>
                    {difficulties.map((d) => (
                        <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                </select>
            </label>
            <br/>
            <button type="submit">Create</button>
        </form>
    );
}
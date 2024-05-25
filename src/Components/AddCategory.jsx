import { useState } from "react"

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const InputText = inputValue.trim();

        if (InputText.length <= 1)
            return;

        onNewCategory(InputText);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Agregar categoria</label>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory

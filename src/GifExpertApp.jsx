import { useState } from "react";
import { AddCategory, GridGifs } from './Components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (value) => {

        if (categories.includes(value))
            return;
        console.log(value, categories)
        setCategories(cat => [value, ...cat]);
    };

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            <ol>
                {
                    categories.map(category =>
                        <GridGifs
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp

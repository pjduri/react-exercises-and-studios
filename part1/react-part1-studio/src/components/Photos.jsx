import React from 'react'
import styles from './Description.module.css'

const RecipePhoto = () => {
    const recipeImageUrl = 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg'
    return <img src={recipeImageUrl} alt="recipe photo" className = {styles.imageUpdates} />
}

export default RecipePhoto
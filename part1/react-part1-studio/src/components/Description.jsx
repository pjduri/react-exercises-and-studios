import React from 'react'
import styles from './Description.module.css'

export function RecipeAuthor() {

    const authorLink = 'https://panlasangpinoy.com/about-2/'
    const authorPhoto = 'https://panlasangpinoy.com/wp-content/uploads/2020/03/Vanjo-Merano-Panlasang-Pinoy.jpg'
    const authorName = 'Vanjo Merano'

    return (
        <div className={styles.recipeAuthorBlock}>
            <img style={{height: '70vh'}} src={authorPhoto} alt='Vanjo Merano' className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Panlasang Pinoy</a>
            </div>
        </div>
    )

}

export default class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Filipino Pork Adobo</h1>
                    <p>This is a recipe post for Filipino Pork Adobo. It is a dish composed of pork slices cooked in soy sauce, vinegar, and garlic. There are version wherein onions are also added. Adobo is a popular dish in the Philippines, along with Sinigang.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

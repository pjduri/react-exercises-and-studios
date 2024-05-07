const RecipeAuthor = () => {
   const authorLink = 'https://panlasangpinoy.com/about-2/'
   const authorPhoto = 'https://panlasangpinoy.com/wp-content/uploads/2020/03/Vanjo-Merano-Panlasang-Pinoy.jpg'
   const authorName = 'Vanjo Merano'

   return (
      <div>
         <img src={authorPhoto}
            alt="Vanjo Merano"
            style={{ objectFit: "contain", borderRadius: "50%" }}
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   )
}

const RecipeIngredients = () => {
   const ingredients = [
      '2 lbs pork belly',
      '2 tablespoons garlic',
      '5 dried bay leaves',
      '4 tablespoons vinegar',
      '1/2 cup soy sauce',
      '1 tablespoon peppercorn',
      '2 cups water',
      'Salt to taste'
   ]
   return (
      <div>
         <h3>Recipe Ingredients:</h3>
         <ul>
            {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
         </ul>
      </div>
   )
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Filipino Pork Adobo</h1>
            <p>This is a recipe post for Filipino Pork Adobo. It is a dish composed of pork slices cooked in soy sauce, vinegar, and garlic. There are version wherein onions are also added. Adobo is a popular dish in the Philippines, along with Sinigang.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   )
}

const RecipePhoto = () => {
   return (
      <img src='https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg'
         alt='pork adobo'
         className="imageUpdates"
      />
   )
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   )
}

import recipeData from './recipe.json'
import './styling.css'

function RecipeImage() {
  return <div key={recipeData[0].name}>
    <img src={recipeData[0].recipeImage}
      alt='mac n cheese!'
      className='recipeImage' />
  </div>
}

export default RecipeImage

//import json file for the data
//apply css for className recipeImage

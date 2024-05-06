import './styling.css'
import recipeData from './recipe.json'

function AuthorInfo() {
  const { name, author, website, authorImage } = recipeData[0]

  const recipeAuthor = <div key={name}>
    {author}
  </div>

  const recipeWebsite = <div key={name}>
    <a href={website}>{name}</a>
  </div>

  const recipeAuthorImage = <div key={name}>
    <img className='authorImage' src={authorImage} alt={author} />
  </div>

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  )
}

export default AuthorInfo

//import styles.css
//import json file for author info
//image, name, website
//css for styling image

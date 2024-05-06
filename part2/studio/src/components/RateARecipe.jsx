let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"]

function RateARecipe({rating}) {
  const GiveRating = ({rating}) => <h3>{stars[rating - 1]}</h3>

  return rating <= 5 && rating >= 1 ? <GiveRating rating={rating} /> : null
}

export default RateARecipe

//conditional to render stars based on a number provided in App.js 

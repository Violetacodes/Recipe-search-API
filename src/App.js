import { useEffect, useState } from 'react';
import video from './foodvideo.mp4'
import './App.css';
import MyRecepiesComponent from './MyRecepiesComponent';

function App() {

  const MY_ID = "4118a937";
  const MY_KEY = "aae5800d6f367bff0774bb7b63f5ea86";

  const [mySearch, setMySearch] = useState("");
  const [myRecepies, setMyRecepies] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("chicken");

useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecepies(data.hits);
  }

fetchData();
 
}, [wordSubmitted])

const myRecepiSearch = (e) => {
setMySearch(e.target.value)
}

const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch);
}
  return (
    <div className="App">
    <div className="container">
    <video autoPlay muted loop> <source src={video} type="video/mp4" /></video>
    <div className="Iam">

<p>Find</p>
<b>
  <div className="innerIam">
    the best recipes <img src="https://img.icons8.com/fluency/344/healthy-food-calories-calculator.png" alt="piccc" width="35px"/><br /> 
    calories<br />
    products<br />
    cuisines<br />
    and inspire 
    </div>
</b>

</div>
    </div>

    <div className='container'>
    <form onSubmit={finalSearch} >
    <input className='search' placeholder='Search...' onChange={myRecepiSearch} value={mySearch}>
    </input>
    </form>
    <div className='container'>
    <button onClick={finalSearch}><img src='https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/344/external-pan-home-appliances-and-kitchen-flatart-icons-lineal-color-flatarticons.png' width="40px" alt='iconna' className='icons' /></button>
    </div>
    </div>

   {myRecepies.map((element, index) => {
     return(
       <div key={index}>
<MyRecepiesComponent
label = {element.recipe.label} 
image = {element.recipe.image} 
calories={element.recipe.calories} 
ingredients={element.recipe.ingredientLines}
cuisinetype = {element.recipe.cuisineType}
source= {element.recipe.source}
time={element.recipe.totalTime}

/> 
</div>
     )
  
   })}
    </div>
  );
}
export default App;

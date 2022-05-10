function MyRecepiesComponent({label, image, calories,ingredients,cuisinetype, source, time}) {

    
    return(
        <div>
        <div className="container">
             <h2>{label}</h2>
         </div>
        <div className="container imgbox">
            <img className="image" src={image} alt='pictureoffood' />
           </div>
           <div className="container">
         <p className="colorthree">Source: {source}</p>
            <p className="color">{calories.toFixed()} calories</p>
            <p className="colortwo">Cuisine: {cuisinetype}</p>
            <p className="colorfour">Time of cooking: {time} min</p>
        </div>
  
         <ul className="list container">
         {ingredients.map((ingredient, index)=> 
          <li key={index}> <img src="https://img.icons8.com/ios-filled/344/checkmark--v1.png" alt="iconns" className="icon" />
              {ingredient}</li>
)}
         </ul>
    
        </div>
        
    )
}

export default MyRecepiesComponent;
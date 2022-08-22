import axios from "axios";

const APP_ID = "a172f123";
const APP_KEY = "0561d217ec8b90c32ca3264b626f0f63";

let fieldValue = "";

//function to get data via API with search param (needs param via getRecipes...)
const getRecipes = async ( searchString ) => {
    try {

        const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        console.log(response.data)

    }

    catch ( e )   {
        console.error( e );
    }

}

//searchfield to fill the param for the API
const searchField = document.getElementById("search");
searchField.addEventListener("keyup", handleChange)

function handleChange(e){

    fieldValue = e.target.value;
    //console.log(fieldValue);

}


const submitSearch = document.getElementById('search-field-submit');
submitSearch.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault()
    getRecipes(fieldValue);
}










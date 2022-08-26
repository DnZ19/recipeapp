import axios from "axios";
import 'dotenv/config';


require('dotenv').config();
//console.log(process.env.API_ID);

const APP_ID = process.env.API_ID;
const APP_KEY = process.env.API_KEY;

let fieldValue = "";


//function to get data via API with search param (needs param via getRecipes...)
const getRecipes = async ( searchString ) => {
    try {
// set to 1 for API limit purpose
        for (let i = 0; i < 1; i++) {

            const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            // console.log(response.data.hits)

            //destructuring
            const {label} = response.data.hits[i].recipe;
            const {image} = response.data.hits[i].recipe;

            // if statement if --> response then....
            // if (response)   {
            //
            // } else  {
            //
            // }

            function listOfRecipes ()   {

                //Label
                const listItem = document.createElement("LI");
                listItem.classList.add("recipeLabel");
                const labelItem = document.createTextNode(label);
                listItem.appendChild(labelItem);
                document.getElementById("recipe-items").appendChild(listItem);

                //image
                const imageItems = document.createElement("IMG");
                imageItems.classList.add("recipeImage");
                imageItems.setAttribute('src', image);
                //imageItems.appendChild(imageItem);
                document.getElementById("image-items").appendChild(imageItems);



            }
            listOfRecipes();



        }
    } catch ( e )   {
        console.error( e );
    }
}



//search field to fill the param for the API

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






import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe.recipe_id} className="col-md-4">
                        <img src={recipe.image_url} alt={recipe.title}/>
                        <a href={recipe.source_url}>{recipe.title}</a>
                    </div>
                )
            })}
        </div>
    </div>
);

export default Recipes;

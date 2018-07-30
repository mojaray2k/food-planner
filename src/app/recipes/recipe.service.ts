import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Delicious Pasta', 'Spicy and fresh pasta', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3DN9u99OOY&w=800&q=85', [
            new Ingredient('Pasta',1),
            new Ingredient('Red chilli flakes', 3),
            new Ingredient('Cilantro', 6)
    ]
),
        new Recipe('Lemon-Buttermilk Pound Cake', 'A blue-ribbon pound cake recipe.', 'https://images.media-allrecipes.com/userphotos/720x405/2054794.jpg', [
            new Ingredient('Eggs', 4),
            new Ingredient('Butter', 2),
            new Ingredient('Lemon Zest', 1)
        ])
    ];

    constructor(private slService:ShoppingListService){

    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    getRecipes() {
        //Retrieves a copy of the array
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
  
}
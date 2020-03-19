import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Tortilla de patatas",
      imageUrl:
        "https://s1.eestatic.com/2019/10/30/cocinillas/recetas/aperitivos-y-entrantes/Tortilla-Patatas-Tortilla_de_patata-Recetas_Rapidas-Videorreceta-Aperitivos_y_entrantes_440717095_136611328_1706x960.jpg",
      ingredients: ["Patatas", "Huevos", "Cebolla", "Pimiento"]
    },
    {
      id: "r2",
      title: "Spaguetti",
      imageUrl:
        "https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg",
      ingredients: ["Spaguetti", "Tomates", "Queso", "Albahaca"]
    },
    {
      id: 'r3',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r4',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() {}

  getAllRecipes() {
    // Spread operator: pulls all the elements of the recipes array out of it and then adds it to a new array
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes=this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes)
  }
}

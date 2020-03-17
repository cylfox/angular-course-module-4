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
}

import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { RecipesService } from './recipes.service';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnChanges(record){
    console.log('ngOnChanges', record);
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('ngOnInit');
  }

  // Ni puta idea de si esto es lo mas recomendado, yo creo que no
  // porque cada vez que te mueves a otra view y vuelves se recarga TODO
  // igual habria que utilizar el subscribe, pero por lo pronto... It just works.
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();

  }

}

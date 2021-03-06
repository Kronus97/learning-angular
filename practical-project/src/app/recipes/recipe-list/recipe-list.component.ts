import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from "../recipe.model"; 
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    onRecipeSelected(recipe: Recipe): void {
        this.recipeSelected.emit(recipe);
    }
}

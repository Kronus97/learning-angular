import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}

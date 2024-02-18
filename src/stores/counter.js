import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCTAILS_BY_URL } from "../constants";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    ingredients: [],
    cocktails: [],
    ingredient: null,
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data.drinks;
    },
    async getCocktails(ingredient) {
      const data = await axios.get(`${COCTAILS_BY_URL}${ingredient}`);
      this.cocktails = data?.data.drinks;
    },
    setIngredient(val) {
      this.ingredient = val;
    },
  },
});

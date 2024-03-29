<script setup>
import AppLayout from "@/components/AppLayout.vue";
import CoctailsLayout from "@/components/CoctailsLayout.vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const rootStore = useCounterStore();
rootStore.getIngredients();

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIngredient(null);
}
</script>

<template>
  <AppLayout
    imgUrl="/src/assets/img/bg-1.jpg"
    :backFunc="removeIngredient"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose your drink"
            size="large"
            class="select"
            @change="getCocktails"
            filterable
            allow-create
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="Coctails" class="img" />
      </div>
      <div v-else class="info">
        <div class="title">Cocktails with {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CoctailsLayout
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.img
  margin-top: 60px

.cocktails
  display: flex
  align-items: center
  flex-wrap: wrap
  max-height: 400px
  overflow-y: auto
  margin-top: 60px
</style>

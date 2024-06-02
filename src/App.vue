<script setup lang="ts">
import { onMounted, ref } from 'vue';
import client from './utils/axios';
import { Country } from './models/country.model.ts';
import CountryList from './components/CountryList.vue'


const q = ref('');

const filteredCountries = ref<Country[]>([]);
const countries = ref<Country[]>([]);

const getCountries = async () => {
  try {
    const { data } = await client.get('/all?fields=name,capital,currencies,flags,region');
    countries.value = data;
  } catch (error) {
    console.log(error)
  }
}

const search = () => {
  filteredCountries.value = countries.value?.filter((country) => country.name.common.toLowerCase().includes(q.value.toLowerCase()))
}

onMounted(() => {
  getCountries()
});



</script>

<template>

  <section>
    <!-- Container -->
    <div class="w-full px-5 py-5 mx-auto max-w-7xl md:px-10 ">
      <!-- Component -->
      <div class="flex flex-col items-center">
        <!-- Heading Div -->
        <div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-10">
          <h1 class="text-3xl font-semibold text-white capitalize md:text-5xl ">Countries
          </h1>
          <p class="mx-auto mt-4 max-w-[528px] text-gray-200">Discover essential facts about every country.</p>
        </div>

        <!-- Search -->
        <div class="flex justify-center w-full mb-5 ">
          <label class="hidden px-3 py-1" for="bar-search"></label>
          <input
            class="w-10/12 px-2 py-1 font-semibold text-purple-900 placeholder-blue-300 border-2 rounded-md appearance-none md:w-1/2 text-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 dark:placeholder-gray-600"
            type="search" name="q" placeholder="Search" @input="search" v-model="q">
        </div>

        <!-- Blog Div -->
        <template v-if="countries.length != 0">
          <CountryList :countries="filteredCountries?.length > 0 ? filteredCountries : countries" />
        </template>
        <template v-else>
          <div class="w-16 h-16 border-4 border-gray-800 border-dashed rounded-full animate-spin"></div>
        </template>
      </div>
    </div>

  </section>
</template>

<style scoped></style>

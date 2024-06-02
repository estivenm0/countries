<script setup lang="ts">
import { Country } from '../models/country.model';
import CountryItem from './CountryItem.vue'

defineProps<{
    countries: Country[]
}>();

</script>

<template>
   <div class="grid grid-cols-1 gap-8 mb-6 justify-items-center sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12" >
        <template v-for="country in countries" >
            <CountryItem :country />
        </template>
        
    </div>
</template>
<script setup lang="ts">
import { Country } from '../models/country.model';


defineProps<{
    country: Country
}>();

</script>

<template>
    <div 
        class="flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-gray-800 p-4 font-bold text-white transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px] w-[90%]">
        <img :src="country.flags.png"
            alt="" class="inline-block object-cover w-full h-40" />
        <div class="w-full pt-2">
            <p class="mb-2 text-xl font-semibold">{{ country.name.common }}</p>
            <p class="mb-2 text-xs font-semibold text-gray-400 uppercase">
                Capital: 
                <span class="font-bold" v-for="capital, index in country.capital" :key="index">
                    {{ index >0 ? ' | ' : '' }}
                    {{ capital }}
                </span>
            </p>
            <p class="mb-2 text-xs font-semibold text-gray-400 uppercase">
                Region: <span class="font-bold" >{{ country.region }}</span>
            </p>

        </div>
    </div>
</template>
<template>
  <div class="w-full max-w-sm items-center ">
    <form class="self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label for="name">Nom de l'oeuvre</label>
    <input type="text" id="name" required v-model="artwork.name" name="name"/>
    
    <label>Référence</label>
    <input type="text" id="ref" v-model="artwork.ref" name="ref"/>
    
    <label>Description</label>
    <input type="text" id="description" v-model="artwork.description" name="description"/>

    <label>Prix</label>
    <input type="text" id="price" v-model="artwork.price" name="price"/>

    <label>Statut</label>
    <select name="status" id="statusList" v-model="artwork.status" >
      <option v-for="option in statusList.values" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>

    <label>Image</label>
    <input type="hidden" id="status" v-model="artwork.image_url" name="status"/>

    <button @click="saveArtwork" style="border:1px solid #ccc">Ajouter</button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ArtworkDataService from "@/services/ArtworkDataService";
import StatusDataService from "@/services/StatusDataService";
import Artwork from "@/types/Artwork";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "AddArtwork",
    setup() {
        const artwork: Artwork = {
            id: null,
            ref: 0,
            name: "",
            serie: 0,
            modified: "",
            description: "",
            price: 0,
            status: 0,
            image_url: "/img/zgTuckAAptvuHzK2bpe1QpWzjeLhAtVLtllAelFe.jpeg"
        };
        const statusList = ref([]);
        return { artwork, statusList };
    },
    mounted() {
        StatusDataService.getAll()
            .then((response: ResponseData) => {
            console.log("Status", response.data);
            this.statusList.values = response.data;
        });
        console.log(this.statusList);
    },
    methods: {
        saveArtwork() {
            let data = {
                ref: this.artwork.ref,
                name: this.artwork.name,
                serie: this.artwork.serie,
                modified: this.artwork.modified,
                description: this.artwork.description,
                price: this.artwork.price,
                status: this.artwork.status,
                image_url: this.artwork.image_url
            };
            ArtworkDataService.create(data)
                .then((response: ResponseData) => {
                this.artwork.id = response.data.id;
                console.log(response.data);
            })
                .catch((e: Error) => {
                console.log(e);
            });
        }
    },
    components: {  }
})
</script>

<style>
  input{
    border:1px solid #ccc;
  }
</style>
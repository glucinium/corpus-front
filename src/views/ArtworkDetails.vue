<template>
 <template>
  <div v-if="error">
    Erreur : {{ error }}
  </div>
  <div v-else class="flex content-center justify-center">
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
       </select>

    <label>Image</label>
    <input type="hidden" id="status" v-model="artwork.image_url" name="status"/>

    <button @click="saveArtwork" style="border:1px solid #ccc">Ajouter</button>
    </form>
  </div>
</template>
</template>

<script>
import getArtwork from "../composables/getArtwork"

export default {
  props: ['id'],
  setup(props) {
    const { artwork, error, load } = getArtwork(props.id);
    
    load();
    console.log(artwork);
    return { artwork, error }
  }
}

</script>

<style>

</style>
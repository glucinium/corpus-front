<template>
  <div class="bg-white overflow-hidden shadow sm:rounded-lg">
    <div class="px-6 sm:px-8 ">
      <div class="mt-6 text-xl sm:text-2xl text-gray-900">
        <div class="flex justify-between">
        Œuvres
        <div>
      </div>
    </div>
  </div>
</div>
  <div v-if="error">
    Erreur : {{ error }}
  </div>
  <div v-else class="flex content-center justify-center">
    <div class="relative shadow border-b border-gray-200 sm:rounded-lg max-w-full">
    <table class="artworks-table min-w-full divide-y divide-gray-200">
      <thead class="">
        <tr class="bg-slate-200">
          <th class="artworks-th"></th>
          <th class="artworks-th">RÉF.</th>
          <th class="artworks-th">Nom de l'oeuvre</th>
          <th class="artworks-th">Prix</th>
          <th class="artworks-th">Série</th>
          <th class="artworks-th">Statut</th>
          <th class="artworks-th">Modifié</th>
          <th class="artworks-th">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 block sm:table-row-group">
        <tr v-for="artwork in artworks" :key="artwork.id" class="group block h-auto py-4 sm:table-row sm:h-28 sm:py-0">
          <td class="img-td">
            <div class="relative w-28 flex-shrink-0">
              <div class="aspect-w-1 aspect-h-1">
                <img :src=artwork.image_url class="object-cover"> 
              </div>
            </div>
          </td>
          <td>{{ artwork.ref }}</td>
          <td>{{ artwork.name }}</td>
          <td>{{ artwork.price }}</td>
          <td>{{ artwork.serie }}</td>  
          <td>{{ artwork.status }}</td>
          <td>{{ artwork.modified }}</td>
          <td>
          <router-link :to="{ name: 'ArtworkDetails', params: { id: artwork.id }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Modifier
          </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  </div>
</template>

<script>
import getArtworks from '../composables/getArtworks';

export default {
  name: 'ArtworksView',
  setup() {
    const { artworks, error, load } = getArtworks();
    load();
    return { artworks, error, load };
  }
}
</script>

<style>
  td{
    @apply whitespace-nowrap cursor-default block sm:table-cell px-3
  }
  td.img-td {
    @apply px-0
  }
</style>
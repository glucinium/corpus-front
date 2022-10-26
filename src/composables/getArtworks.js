import { ref } from 'vue';

const getArtworks = () => {
  const artworks = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/artworks");
      artworks.value = await data.json();
      
      for(let i=0; i<artworks.value.length ; i++) {
        let data2 = await fetch("http://localhost:3000/status/"+artworks.value[i].status);
        let statut =  await data2.json();
        console.log("statut",statut.name);
        artworks.value[i].status = statut.name;
      }
      
    }
    catch (err) {
      error.value = err.message;
    }
  }

  return { 
    artworks, 
    error, 
    load 
  };
}

export default getArtworks
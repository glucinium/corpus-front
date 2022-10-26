import { ref } from 'vue';

const getArtwork = (id) =>  {
  const artwork = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/artworks/"+id);
      artwork.value = await data.json();  
    }
    catch (err) {
      error.value = err.message;
    }
  }

  return { 
    artwork, 
    error, 
    load 
  };
}

export function useCounter() {
  const counter = ref(0);

  function increase() {
    counter.value += 1;
  }

  return { counter, increase }
}

export default getArtwork
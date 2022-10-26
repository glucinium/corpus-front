//import getArtwork from "../../src/composables/getArtwork";

import { getArtwork } from '../../src/composables/getArtwork';
import { withSetup } from './test-utils';

beforeEach(() => {

});

describe('getArtwork', () => {
  it("should be a valid artwork ", async () => {
    const [ result, app ] = withSetup(
      () => getArtwork(1)
    );

    const { artwork, error, load } = result;

    load().then( () => {
      console.log("TEST");

    expect(artwork.value.id).toBe(1);
    });
    console.log(artwork);
    // const artwork = ref(null);

    // let data = await fetch("http://localhost:3000/artworks/"+1);
    // artwork.value = await data.json();

    // console.log(artwork.value.name)
  });
});
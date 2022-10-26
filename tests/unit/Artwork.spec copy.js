import { shallowMount } from "@vue/test-utils";
import Rating from "@/components/Rating.vue";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(Rating, {
    propsData: {
      initialGrade: 2,
      maxStars: 5
    }
  });
});

afterEach(() => {
  //wrapper.destroy();
  wrapper = null;
});
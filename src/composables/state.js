import { readonly, ref } from "vue";
export function useState(initialState) {
  const state = ref(initialState);
  const setState = (newState) => {
    state.value = ref(newState);
  };
  return [readonly(state), setState];
}

const films = ref([]);

export default () => {
  const errorInput = ref("");
  const router = useRouter();
  const config = useRuntimeConfig()

  const getFilms = async (data) => {
    if (data.length > 2) {
      films.value = [];
      errorInput.value = "";
      const { data: newfilms } = await useAsyncData("data", () =>
        $fetch(`${config.public.apiBase}?s=${data}&apikey=${config.public.apiSecret}`),
      );
      if (newfilms.value?.Response === "False") {
        films.value = newfilms.value;
      } else {
        films.value = newfilms.value?.Search;
      }
      if (films.value.length > 0) {
        router.push({ path: "/catalog" });
      }
    } else {
      errorInput.value = "Введите названиие фильма";
    }
  };
  return {
    films,
    errorInput,
    getFilms,
  };
};

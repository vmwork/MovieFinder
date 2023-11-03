const films = ref([]);

export default () => {
  const errorInput = ref("");
  const router = useRouter();

  const getFilms = async (data) => {
    if (data.length > 2) {
      films.value = [];
      errorInput.value = "";
      const { data: newfilms } = await useAsyncData("data", () =>
        $fetch(`https://www.omdbapi.com/?t=${data}&apikey=c5c1710b`),
      );
      // Проверка на потенциальный баг. Приходит всегда один фильм, но может и придти 
      // массив фильмов. 
      if (Array.isArray([newfilms.value])) {
        films.value.push(newfilms.value);
      } else {
        films.value = newfilms.value;
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

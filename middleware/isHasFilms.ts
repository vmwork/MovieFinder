export default defineNuxtRouteMiddleware((to, from) => {
  const { films } = useGetFilms();
  if (films.value.length < 1) {
    return navigateTo("/");
  }
})

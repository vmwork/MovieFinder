# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

usage:
yarn install
yarn run dev

Create a website called MovieFinder meeting the following requirements:
MovieFinder is a search engine for movies.
It should have at least a homepage a results page and a detail page.
The homepage should contain a search box.
The search box should allow the user to search for movies by Title.
The results page should display the found movies in a slider.
Every movie slide should contain the movie Title, Poster, Director and Year.
The detail page should display a Title, Poster, Director and Year
You can use The Open Movie Database’s API (https://www.omdbapi.com/) to fetch
information about movies.

Сделано 3 страницы. Главная, Каталог и Детали. На главной поск фильма. Пока поиск не произведен, перреход на Каталог и Детали
отключен через middewware, который смотрит за состоянием массива с результатами поиска.
Каталог - выводит поисковые результаты в виде слайдера, если фильмов более одного и открывается сразу после поиска. Детали открывается по нажатию на кнопку. Выводится более полная информация о фильме.

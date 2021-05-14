export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "crime"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },

      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],

    films: [
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspense"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
    ],
  };
}

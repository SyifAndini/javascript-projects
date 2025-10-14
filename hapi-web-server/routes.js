const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return `Selamat datang di Homepage!`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method ini";
    },
  },
  {
    method: "GET",
    path: "/users/{username?}",
    handler: (request, h) => {
      const { username = "stranger" } = request.params;
      const { lang } = request.query;
      if (lang === "id") {
        return `Halo, ${username}! Apa kabar?`;
      }

      return `Hello, ${username}! How do you feel today?`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;

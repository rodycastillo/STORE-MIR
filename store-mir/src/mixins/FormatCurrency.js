export default {
  methods: {
    formatCurrency(n) {
      const int = parseFloat(n);
      const formatte = new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
      });
      return formatte.format(int);
    },
  },
};

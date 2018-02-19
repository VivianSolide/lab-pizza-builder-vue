const vm = new Vue({
  el: "#app",
  data: {
    basePrice: 10,
    ingredients: [
      {
        name: 'pepperonni',
        price: 1,
        selected: false
      }, {
        name: 'mushrooms',
        price: 1,
        selected: true
      }, {
        name: 'green peppers',
        price: 1,
        selected: true
      }, {
        name: 'white sauce',
        price: 3,
        selected: false
      }, {
        name: 'gluten-free crust',
        price: 5,
        selected: false
      }
    ]
  },
  methods: {
    isSelected(ingredientName) {
      // Given the name of an ingredient, will return whether it is selected
      return this.ingredients.find(ingredient => ingredient.name === ingredientName).selected;
    },
    toggle(ingredientName) {
      for (let i = 0; i < this.ingredients.length; i++) {
        if (ingredientName === this.ingredients[i].name) {
          this.ingredients[i].selected = !this.ingredients[i].selected
        }
      }
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    listAllPricesSelected() {
      return this.ingredients.filter(ingredient => ingredient.selected === true);
    },
    cartWithTotal() {
      var price = this.basePrice;
      for (let i = 0; i < this.listAllPricesSelected.length; i++) {
        price += this.listAllPricesSelected[i].price;
      }
      return price;
    }
  },
});
<template>
    <div>
        <select v-model='selectedCategory' @change="fetchEvents">
            <option v-for="category in categories" :key="category.id" :value="category.title">{{category.title}}</option>
        </select>

        <select @change="fetchEvents" v-model="pages">
            <option>5</option>
            <option>10</option>
            <option>20</option>
        </select>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'selectedCategory',
      'categories',
      'events',
      'pages',
    ]),
        selectedCategory:  {
      ...mapMutations({
        set: 'selectedCategory'
      }),
      ...mapGetters({
        get: 'selectedCategory'
      })
    },

    pages:  {
      ...mapMutations({
        set: 'pages'
      }),
      ...mapGetters({
        get: 'pages'
      })
    }
  },
  methods:{
    ...mapActions({
      fetchEvents: 'getEvents',
      fetchCategories: 'fetchCategories'
    }),
  },
  created(){
    this.fetchCategories();
    this.fetchEvents();
  },
}
</script>

<style scoped>
select{
  margin: 20px;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  box-shadow: 0 15px 30px -10px;
  cursor: pointer;
  outline: none;
}
</style>
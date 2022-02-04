<template>
    <div>
        <button @click="fetchPrevPage">Prev page</button>
        <button @click="fetchNextPage">Next page</button>
        <br>
        <span>current page: {{this.currentPage}}</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'currentPage'
    ]),
  },
  methods:{
    ...mapActions({
      fetchEvents: 'getEvents',
      fetchNextPage: 'nextPage',
      fetchPrevPage: 'prevPage',
    }),
  },
  created(){
    this.fetchEvents();
  },
}
</script>

<style scoped>
span{
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
}

button{
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  width: 15vw;
  height: 40px;
  margin: 0 15px;
  font-size: 19px;
  color: whitesmoke;
  letter-spacing: 1px;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  background: rgb(31, 31, 31);
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
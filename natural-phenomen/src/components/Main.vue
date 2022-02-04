<template>
<div>

<Filters/>

<events-table :events="events"/>

<Pagination/>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import EventsTable from './EventsTable.vue';
import Filters from './Filters.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'Main',
  components: {
    EventsTable,
    Filters,
    Pagination
  },

  computed: {
    ...mapGetters([
      'events',
    ]),
  },
  methods:{
    ...mapActions({
      fetchEvents: 'getEvents',
    }),
  },
}
</script>

<style scoped>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
</style>
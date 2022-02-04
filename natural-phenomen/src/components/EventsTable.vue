<template>
<table>
  <tr>
    <th>Title</th>
    <th>Date</th>
    <th>Map</th>
  </tr>
  <tr v-for="item in events" :key="item.id">
    <td>{{item.title}}</td>
    <td>{{item.date}}</td>
    <td>
      <a :href="`https://www.google.com/maps/search/?api=1&query=${item.coordinates}`" target="_blank">{{item.coordinates}}</a>
    </td>
  </tr>
</table>
</template>

<script>
export default {
    name: "EventsTable",
    props: {
        events: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
table, td, th {
  border: 1px solid #ccc;
  padding: 1rem;
}

table{ 
    border: none;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
    border-spacing: 1; 
    border-collapse: collapse; 
    background:rgba(233, 233, 233, 0.61);
    border-radius: 10px;
    overflow:hidden;
    max-width:800px; 
    width:100%;
    margin: 20px auto;
    box-shadow: 0 15px 30px -10px;
}

td{
    background:rgba(196, 196, 196, 0.61);
}
  
</style>
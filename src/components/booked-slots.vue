<template>

  <div id="booked-slots">
   <navigationbar />
    <h1 class="title">Booked slots</h1>
    <div class="table">
      <div >
        <md-table >
          <md-table-row  class="rows">
            <md-table-head class="headings">Start time</md-table-head>
            <md-table-head class="headings">End time</md-table-head>
            <md-table-head class="headings">Host</md-table-head>
          </md-table-row>
          <md-table-row class="rows" v-for="item in bookedSlots" :key="item.host">
            <md-table-cell  class="row" v-for="list in item" :key="list.host" >{{list}}</md-table-cell>
           <md-table-cell>
            <md-button class="md-dense md-raised md-primary button"  v-on:click="request()">Request</md-button>
            </md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
    <div class="next-button">
          <md-button class="md-dense md-raised md-primary button-next"  v-on:click="book()">Book</md-button>
    </div>
  </div>
</template>
<script>
import navigationbar from "../components/navigation-bar.vue";
export default {
  name: "booked-slots",
  components: {
    navigationbar
  },
  data:()=>({
        bookedSlots:JSON.parse( localStorage.getItem('bookedSlots'))
            
  }),
  methods:{
    book:function(){
      this.$router.push('/bookMeeting')
    }
  }
};
</script>
<style scoped>
.headings{
    font-size:23px;
    margin-left: 100px;
}
.rows{
    margin-left: 20px;
    padding: 0px 0px 0px 0px;
}
.table{
  margin-left:60px;
  margin-right: 60px;
}
.row{
  font-size:15px;
  margin-left: -100px;
}
.title{
  margin-left:center;
  margin-bottom: 50px;
  margin-top: 60px;
}
.button{
     margin: 33px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.button-next{
     margin-left:900px;
    margin-top:70px;
    width: 10%;
    height:50%
}

</style>
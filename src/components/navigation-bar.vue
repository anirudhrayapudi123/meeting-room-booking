<template>
    <div id="navigation-bar">
        <md-tabs md-sync-route md-alignment="fixed" >
      <md-tab id="tab-home" class="nav" md-label="Create" to="/create" ></md-tab>
      <md-tab id="tab-pages" class="nav" md-label="My meetings" to="/mymeetings"> </md-tab>
        </md-tabs>
        </div>
    
    <!-- <mdb-navbar color="blue" dark>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item class="item" v-on:click="create()">Create</mdb-nav-item>
        <mdb-nav-item class="item" v-on:click="my_meetings()">My Meetings</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-nav-item class="item user">{{user}}<AccountCircleIcon class="icon"/></mdb-nav-item>
    </mdb-navbar-toggler>
  </mdb-navbar> -->
</template>
<script>
// import AccountCircleIcon from "vue-material-design-icons/AccountCircle.vue";

export default {
    name:"navigation-bar",
    components:{
    //    AccountCircleIcon
    },
   data:()=>({
        user:"User"
    }),
    methods:{
        home:function(){
            this.$router.push('home');
        },
        my_meetings:function(){
            this.$router.push('mymeetings');
        },
        create:function(){
            this.$router.push('create');
        }
    }
}
</script>
<style scoped>

.float-left{
      margin-left:center;
      padding:20px;
}
.brand{
    color:white;
    font-size: 140%;
    padding:100px
}
.item{
    padding-right:50px;
    font-size:20px;
}
.user{
    display:inline;
    color:white
}
.icon{
    padding:10px;
    size: 20px;
}
</style>
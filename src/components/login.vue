<template>
    <div id="login">
        <h1 class="title"><AccountGroupIcon/>Meeting Room Slot Booking</h1>
    <div class="button">
        <b-button  variant="primary" class="buttons" v-on:click="login()">Login with outlook<WindowsIcon/></b-button>
    </div>
    </div>
</template>
<script>
import WindowsIcon from "vue-material-design-icons/Windows.vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue"
export default {
    name:"login",
    components:{
        WindowsIcon,
        AccountGroupIcon
    },
    methods:{
        login:function(){
            this.$router.push('home');    
        }
    }
}
</script>
<style scoped>
.buttons{
    margin-top:20px;
    padding:20px;
    background-color:rgb(16, 138, 220);
    color:white;
    border-radius: 10px;
  font-size:20px;

}
.button{
    margin: 100px;
    cursor:pointer;
}
.title{
    margin:100px;
}
</style>
<template>
    <div>
    <navigationbar/>
    <div class="cards" v-for="meeting in mymeetings" :key="meeting.subject">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{meeting.subject}}</div>
          <div class="md-subhead">{{meeting.starttime}}-{{meeting.endtime}}</div>
        </md-card-header>
        <md-card-content>
            <div class="details">
               <b> Host:</b> {{meeting.host}}<br>
               <b> Floor:</b>{{meeting.floor}}<br>
               <b>Roomname:</b>{{meeting.roomname}}<br>
            </div>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-raised md-primary" v-on:click="update()">UPDATE</md-button>
          <md-button class="md-raised md-primary" v-on:click="delet()">DELETE</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>
  </div>
</template>
<script>
import navigationbar from "../components/navigation-bar.vue";
export default {
    name:'mymeetings',
    components: {
        navigationbar
    },
    data:()=>({
        mymeetings:[
          {
              starttime:"10:30",
              endtime:"11:30",
              subject:"hello every one",
              host:"naveen",
              roomname:"lamda",
              floor:"4th"
          },
          {
              starttime:"11:30",
              endtime:"12:30",
              subject:"hi good",
              host:"sushanth",
              roomname:"omega",
              floor:"4th"
          }

    ]
    }),
    methods:{
        update:function(){
            this.$router.push('/');
        },
        delet:function(){
            
        }
    }
}
</script>
<style scoped>

</style>
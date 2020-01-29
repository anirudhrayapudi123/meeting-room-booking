<template>
  <div>
    <navigationbar />
    <form class="formComponent">  
      <div id="label_startTime">
        <label>Start Time</label>
      </div>
      <div class="subject">
          <Datetimepicker class="wide" v-model="startTime"></Datetimepicker>
      </div>
      <div id="label_endTime">
        <label>End Time</label>
      </div>
      <div class="subject">
          <Datetimepicker class="wide" v-model="endTime"></Datetimepicker>
      </div>
      <div class="subject">
        <md-field>
          <label>Subject</label>
          <md-input v-model="roomSubject"></md-input>
        </md-field>
      </div>
      <div class="subject">
        <md-field>
          <label>Reason</label>
          <md-input v-model="roomReason"></md-input>
        </md-field>
      </div>
      <div class="subject">
        <md-field>
          <label>RoomType</label>
          <md-input v-model="roomType"></md-input>
        </md-field>
      </div>
      <div class="subject">
        <md-field>
          <label>Add Participants</label>
          <md-input v-model="participants"></md-input>
        </md-field>
         <md-button
        class="md-raised md-primary"
        v-on:click="book(startTime,endTime,roomSubject,roomReason,roomType,participants)" 
      >BOOK</md-button>
       <md-dialog-alert
      :md-active.sync="second"
      md-title="Post created!"
      md-content="Your post <strong>Material Design is awesome</strong> has been created." />

      </div>
       <!-- <md-dialog :md-active.sync="second">
      <md-dialog-title>Booked Successfully</md-dialog-title>
      
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Ok</md-button>
      </md-dialog-actions>
          </md-dialog>
      -->
    </form>

  </div>
</template>

<script>
import navigationbar from "../components/navigation-bar.vue";
import Datetimepicker from "vuejs-datetimepicker";
export default {
  name: "TextFields",
  components: {
    navigationbar,
    Datetimepicker,
  },
  data: () => ({
    second: false,
    startTime: "",
    endTime: "",
    roomSubject: "",
    roomReason: "",
    roomType: "",
    participants: "",
    parArr: "",
    bookingDetails: "",
    roomHost: "",
    roomName: ""
  }),

  methods: {
    book: function(
      startTime,
      endTime,
      roomSubject,
      roomReason,
      roomType,
      participants
    ) {
      this.parArr = participants.split(",");
      this.startTime = this.startTime.replace(" ", "T");
      this.endTime = this.endTime.replace(" ", "T");
      this.bookingDetails = {
        roomHost: "Anirudh",
        roomName: "omega",
        startTime: this.startTime,
        endTime: this.endTime,
        roomSubject: this.roomSubject,
        roomType: this.roomType,
        roomReason: this.roomReason,
        participants: this.parArr
      };
      // console.log(this.startTime);
      // console.log(this.bookingDetails);
      let body = JSON.stringify(this.bookingDetails);
      //  console.log(body);
      this.$http.post("http://localhost:8888/bookSlots", body).then(
        response => {
          console.log(response);
          if (response.status === 200) {
             this.second = true;
          }
          if(this.second===true){
            this.$router.push('home');
          }
           },
        error => {
          console.error(error);
        }
    
     );
  }
}}
</script>

<style scoped>
.formComponent {
  margin-top: 100px;
  width: 40%;
  margin-left: 400px;
}
#label_startTime {
  margin-left: -530px;
}
#label_endTime {
  margin-left: -530px;
}
.wide {
  width: 50%;
  border-radius: 8px;
  color: black
}
.subject {
  margin-bottom: 50px;
}
</style>
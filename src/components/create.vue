<template>
  <div class="create">
    <navigationbar />
    <div class="label">
      <!-- <label>Select date:</label> -->
    </div>
    <div class="date-picker">
      <md-datepicker v-model="selectedDate" v-on:input="send_date()">
        <label>Select date</label>
      </md-datepicker>
    </div>
    <div class="floor">
      <div class="md-layout-item">
        <div class="label-floor">
          <!-- <label>Select Floor:</label> -->
        </div>
        <md-field>
          <md-select
            v-model="floor"
            name="floor"
            id="floor"
            placeholder="Floor"
            v-on:input="send_room()">
          <md-option
              class="options"
              v-for="item in floors"
              v-bind:key="item.id"
              v-bind:value="item"
              md-dense
            >{{item}}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="room">
      <div class="md-layout-item">
        <div class="label-floor">
          <!-- <label>Select Room:</label> -->
        </div>
        <md-field>
          <md-select v-model="room" name="room" id="room" placeholder="Room">
            <md-option v-for="item in rooms" v-bind:key="item.id" v-bind:value="item">{{item}}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="button">
      <md-button class="md-dense md-raised md-primary button" v-on:click="next()">Next</md-button>
    </div>
  </div>
</template>
<script>
import navigationbar from "../components/navigation-bar.vue";
export default {
  name: "create",
  components: {
    navigationbar
  },
  data: () => ({
    selectedDate: new Date(),
    selectedFloor: "",
    room: "",
    floor: null,
    floors: [],
    rooms: []
  }),
  methods: {
    next: function() {
      let date =
        this.selectedDate.getFullYear() +
        "-" +
        this.selectedDate.getMonth() +
        1 +
        "-" +
        ("0" + this.selectedDate.getDate()).slice(-2);
      let roomName = this.room;
      let body = JSON.stringify({ date, roomName });
      // console.log(body);
      this.$http.post("http://localhost:8888/slots", body).then(result => {
        console.log(result.body);
        localStorage.setItem("bookedSlots", JSON.stringify(result.body));
        localStorage.setItem("roomName", this.room);
        this.$router.push("booked-slots");
      });
    },
    send_date: function() {
      //  console.log(('0'+this.selectedDate.getDate()).slice(-2));
      let header = new Headers({ "Content-Type": "application/json" });
      header.append("access-control-allow-origin", "*");
      this.$http
        .post("http://localhost:8888/floors", { Headers: header })
        .then(result => {
          this.floors = result.body;
        });
    },
    send_room: function() {
      // console.log(this.floor);
      let header = new Headers({ "Content-Type": "application/json" });
      header.append("access-control-allow-origin", "*");
      this.$http
        .post("http://localhost:8888/roomnames/" + this.floor, {
          Headers: header
        })
        .then(result => {
          this.rooms = result.body;
        });
    }
  }
};
</script>
<style scoped>
.date-picker {
  width: 40%;
  margin-left: 492px;
  margin-top: 10px;
}
.floor {
  width: 40%;
  margin-left: 492px;
  margin-top: 100px;
}
.room {
  width: 40%;
  margin-left: 492px;
  margin-top: 100px;
}
.button {
  margin-left: 600px;
  margin-top: 40px;
  width: 30%;
  height: 50%;
}
.label {
  margin-left: -460px;
  font-size: 20px;
  font: bold;
  margin-bottom: 0px;
  margin-top: 70px;
}
.label-floor {
  margin-left: -520px;
  margin-top: 0px;
  font-size: 20px;
}
</style>
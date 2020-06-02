<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ oneEvent.time }} on {{ oneEvent.date }}</span>
      <h1 class="title">{{ oneEvent.title }}</h1>
      <h5>Organized by {{ oneEvent.organizer }}</h5>
      <h5>Category: {{ oneEvent.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ oneEvent.location }}</address>
    <h2>Event details</h2>
    <p>{{ oneEvent.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ oneEvent.attendees.length ? oneEvent.attendees.length : 0 }}</span
      >
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in oneEvent.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["oneEvent"])
  },
  methods: {
    ...mapActions(["getEvent"])
  },
  created() {
    this.event = this.getEvent(this.id);
  },
  data() {
    return {
      event: {}
    };
  }
};
</script>

<style></style>

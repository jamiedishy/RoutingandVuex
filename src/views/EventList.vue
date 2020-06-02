<template>
  <div>
    <h1>Events Listing</h1>
    <base-icon />
    <event-card v-for="event in allEvents" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    "event-card": EventCard
  },
  computed: {
    ...mapGetters(["allEvents"])
  },
  methods: {
    ...mapActions(["fetchEvents"])
  },
  created() {
    this.fetchEvents();
  },
  data() {
    return {
      events: []
    };
  }
};
</script>

<style></style>

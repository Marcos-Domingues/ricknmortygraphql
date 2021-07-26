<template>
  <section>
    <div class="d-inline-flex">
      <div v-if="page > 1" @click="page--">
        <Button :size="'small'" :label="'Previous'" :primary="true"></Button>
      </div>
      <div v-if="page < 34" @click="page++">
        <Button :size="'small'" :label="'Next'" :primary="true"></Button>
      </div>
      <!-- <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search by Ep id"
        aria-label="Search"
        v-model="search"
      /> -->
    </div>
    <!-- <div v-if="!search"> -->
      <ApolloQuery
        :query="require('../services/episodesSearch').default"
        :variables="{ page }"
      >
        <template slot-scope="{ result: { loading, error, data } }">
          <h2 v-if="loading">{{ loading }}</h2>
          <h2 v-if="error">error</h2>
          <div class="row row-cols-1 row-cols-md-5 g-4">
            <Card
              v-for="(eps, i) in data.episodes.results"
              :key="i"
              :image="eps.characters[eps.characters.length -1].image"
              :name="eps.name"
              :txt1="`Air date: ${eps.air_date}`"
              :txt2="CharEdit(eps.characters)"
            ></Card>
          </div>
        </template>
      </ApolloQuery>
    <!-- </div>
    <div v-else>
        <ApolloQuery
        :query="require('../services/episodeBy').default"
        :variables="{ page, search }"
      >
        <template slot-scope="{ result: { loading, error, data } }">
          <h2 v-if="loading">{{ loading }}</h2>
          <h2 v-if="error">error</h2>
          <div class="row row-cols-1 row-cols-md-5 g-4">
            <Card
              v-for="(eps, i) in data.episodes.results"
              :key="i"
              :image="eps.characters[eps.characters.length -1].image"
              :name="eps.name"
              :txt1="`Air date: ${eps.air_date}`"
              :txt2="CharEdit(eps.characters)"
            ></Card>
          </div>
        </template>
      </ApolloQuery>
    </div> -->
  </section>
</template>

<script>
import Button from "../components/Button/Button.vue";
import Card from "../components/Card/Card.vue";
export default {
  components: {
    Button,
    Card,
  },
  data() {
    return {
      search: "",
      page: 1,
    };
  },
   methods: {
    CharEdit(data) {
      var formated = "";
      data = data.map((item) => {
        return item.name;
      });
      for (var i = 0; i < data.length; i++) {
        formated = data.toString();
      }
      return `Characters: ${formated}`;
    },
  },
};
</script>
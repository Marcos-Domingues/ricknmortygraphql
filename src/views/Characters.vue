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
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      /> -->
    </div>
    <!-- <div v-if="querySearch != ''"> -->
    <ApolloQuery
      :query="require('../services/charactersSearch').default"
      :variables="{ page }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <h2 v-if="loading">{{ loading }}</h2>
        <h2 v-if="error">error</h2>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <Card
            v-for="(char, i) in data.characters.results"
            :key="i"
            :image="char.image"
            :name="char.name"
            :txt1="`Location: ${char.origin.name}`"
            :txt2="EpEdit(char.episode)"
          ></Card>
        </div>
      </template>
    </ApolloQuery>
    <!-- </div> -->
    <!-- <div v-else>
      <ApolloQuery
      :query="require('../services/charactersBy').default"
      :variables="{ page, querySearch }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <h2 v-if="loading">{{ loading }}</h2>
        <h2 v-if="error">error</h2>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <Card
            v-for="(char, i) in data.characters.results"
            :key="i"
            :image="char.image"
            :name="char.name"
            :txt1="`Location: ${char.origin.name}`"
            :txt2="EpEdit(char.episode)"
          ></Card>
        </div>
      </template>
    </ApolloQuery>
    </div> -->
  </section>
</template>
<script>
import Card from "../components/Card/Card.vue";
import Button from "../components/Button/Button.vue";

export default {
  components: {
    Card,
    Button,
  },
  data() {
    return {
      page: 1,
      // search: null,
      querySearch: ''
    };
  },
  methods: {
    EpEdit(data) {
      var formated = "";
      data = data.map((item) => {
        return item.episode;
      });
      for (var i = 0; i < data.length; i++) {
        formated = data.toString();
      }
      return `Episodes: ${formated}`;
    },
  },
  // watch:{
  //   search(newValue){
  //     this.querySearch = `"${newValue}"`
  //   }
  // }
};
</script>

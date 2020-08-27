<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Search Localities</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
            class="search"
            v-model="selectedLocality"
            :md-options="localities"
            @md-changed="onInputChanged"
            @md-selected="onValueSelected"
            md-layout="box">
          <label>Search...</label>
        </md-autocomplete>
        <md-field>
          <label>Selected locality</label>
          <md-textarea v-model="selectedLocality" :disabled="true"></md-textarea>
        </md-field>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Help</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import {search} from "@/lib/search-service";

  export default {
    name: "SearchLocalities",
    data: () => ({
      selectedLocality: null,
      localities: []
    }),
    methods: {
      onInputChanged(e) {
        this.searchAdress(e);
      },
      searchAdress(addr) {
        const query = isNaN(parseInt(addr)) ? `city:*${addr}*` : `zip:*${addr}*`;
        this.localities = search('http://localhost:9200/swtest/_search', query).then(data => {
          const d = data.map(d => `${d.zip} ${d.city}`)
          console.log(d);
          return d;
        }).catch(e => {
          console.log('error', e);
        });
      },
      onValueSelected(v) {
        console.log('[Selected]', v);
      }
    }
  }
</script>

<style scoped>

</style>

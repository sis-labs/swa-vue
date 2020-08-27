<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Auto complete</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
            class="search"
            v-model="selectedAddress"
            :md-options="addresses"
            :md-open-on-focus="false"
            @md-changed="searchAdress"
            @md-selected="onValueSelected"
            md-layout="box">
          <label>Search an address...</label>
        </md-autocomplete>
        <md-field>
          <label>Selected address</label>
          <md-textarea v-model="selectedAddress" :disabled="true"></md-textarea>
        </md-field>
        <md-card-actions>
          <md-button class="md-primary">Help</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { search } from "@/lib/search-service";

export default {
    name: "AutoComplete",
    data: () => ({
      selectedAddress: null,
      addresses: []
    }),
    methods: {
      onInputChanged(e) {
        this.searchAdress(e);
      },
      searchAdress(addr) {
        this.addresses = search('http://localhost:9200/swtest/_search', `address:*${addr}*`).then(data => {
          const d = data.map(d => d.address)
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

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
            @md-changed="onInputChanged"
            @md-selected="onValueSelected"
            md-layout="box">
          <label>Search an address...</label>
        </md-autocomplete>
        <md-field>
          <label>Selected address</label>
          <md-textarea v-model="selectedAddress" disabled="true"></md-textarea>
        </md-field>
        <md-card-actions>
          <md-button class="md-primary">Help</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: "AutoComplete",
    data: () => ({
      selectedAddress: null,
      addresses: [
        'rue des cedres, 3 1920 Martigny, Valais, Suisse',
        'route de Villette 1934 Le Chable, Valais, Suisse',
        'route de Medran 1936 Verbier, Valais, Suisse',
      ]
    }),
    methods: {
      onInputChanged(e) {
        this.searchAdress(e);
      },
      searchAdress(addr) {
        console.log('[Search]', addr);
      },
      onValueSelected(v) {
        console.log('[Selected]', v);
      }
    }
  }
</script>

<style scoped>

</style>

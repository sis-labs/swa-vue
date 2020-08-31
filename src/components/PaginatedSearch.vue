<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Search Localities</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <label>Initial Value</label>
          <md-input v-model="searchQuery" v-on:blur="onInputBlured"></md-input>
        </md-field>

        <md-table  v-model="addresses" md-card>
          <md-table-toolbar>
            <h1 class="md-title">Addresses</h1>
          </md-table-toolbar>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Nb">{{ item.nb }}</md-table-cell>
            <md-table-cell md-label="Street">{{ item.street }}</md-table-cell>
            <md-table-cell md-label="Zip">{{ item.zip }}</md-table-cell>
            <md-table-cell md-label="City">{{ item.city }}</md-table-cell>
            <md-table-cell md-label="Commune">{{ item.commune }}</md-table-cell>
            <md-table-cell md-label="State">{{ item.state }}</md-table-cell>
            <md-table-cell md-label="Country">{{ item.country }}</md-table-cell>
          </md-table-row>
        </md-table>
        <md-card-actions>
          <md-button class="md-primary">Search</md-button>
          <md-button class="md-primary">Help</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
name: "PaginatedSearch"
}
</script>

<style scoped>

</style>

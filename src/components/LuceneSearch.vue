<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Lucene search</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
            class="search"
            v-model="selectedEmployee"
            :md-options="employees"
            @md-changed="onInputChanged"
            @md-selected="onValueSelected"
            md-layout="box">
          <label>Search...</label>
        </md-autocomplete>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: "LuceneSearch",
    data: () => ({
      selectedEmployee: null,
      sending: false,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
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

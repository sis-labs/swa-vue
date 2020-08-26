<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Indexation process</div>
      </md-card-header>
      <md-card-content>
        <vue-markdown>## Presentation of the indexation process</vue-markdown>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: "IndexationProcess",
    components: {
      'vue-markdown': VueMarkdown
    },
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

<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Form auto fill</div>
      </md-card-header>
      <md-card-content>
        <md-autocomplete
            class="search"
            v-model="selectedAddress"
            :md-options="addresses"
            @md-changed="onInputChanged"
            @md-selected="onValueSelected"
            md-layout="box">
          <label>Search...</label>
        </md-autocomplete>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="num">Number</label>
              <md-input type="text" name="num" id="num" v-model="form.num" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="street">Street</label>
              <md-input type="text" name="street" id="street" v-model="form.street" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="city">City</label>
              <md-input type="text" name="city" id="city" v-model="form.city" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="zip">Zip</label>
              <md-input type="text" name="zip" id="zip" v-model="form.zip" />
            </md-field>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="commune">Commune</label>
              <md-input type="text" name="commune" id="commune" v-model="form.commune" />
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="country">Country</label>
              <md-input type="text" name="country" id="country" v-model="form.country" />
            </md-field>
          </div>
        </div>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  import {search} from "@/lib/search-service";

  export default {
    name: "FormAutoFill",
    data: () => ({
      selectedAddress: null,
      sending: false,
      form: {
        num: null,
        street: null,
        city: null,
        zip: null,
        commune: null,
        country: null,
      },
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
        this.addresses = search('http://localhost:9200/swtest/_search', `address:*${v}*`).then(data => {
          const d = data[0];
          this.form = {
            num: d.nb,
            street: d.street,
            city: d.city,
            zip: d.zip,
            commune: d.state,
            country: d.country,
          }
        }).catch(e => {
          console.log('error', e);
        });
      }
    }
  }
</script>

<style scoped>

</style>

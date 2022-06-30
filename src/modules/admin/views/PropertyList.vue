<template>
  <v-container fluid>
    <v-row>
      <v-col class="mx-5">
        <v-alert dense text class="mt-3" icon="fa-home-user">
          <span class="body-2">Pending Properties</span>
        </v-alert>

        <v-skeleton-loader
          v-if="!Receiver.loaded"
          type="table"
        ></v-skeleton-loader>
        <dir v-else>
          <h2>{{ Receiver.data.length }} Total Results</h2>
          <SimpleTable
            :data="Receiver.data"
            :header="header"
            clickReturn="id"
            @rowClicked="NavigateToDetailPage"
          />
        </dir>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { AdminService } from "../../../services/admin.service";
import SimpleTable from "../../../components/CTable.vue";

export default {
  name: "propert_list",
  components: {
    SimpleTable,
  },
  data() {
    return {
      Receiver: {
        data: null,
        loaded: false,
        error: null,
      },
      header: [
        { text: "Price", value: "price", format: (val) => val + " ETB" },
        {
          text: "Bedrooms",
          value: "bedrooms",
          format: (val) => val + " room" + (val > 1 ? "s" : ""),
        },
        // {text: "Bathroom", value: "bathrooms", format: (val) => val + " room" + (val > 1 ? "s" : "")},
        {
          text: "Property Type",
          value: "property_type",
          format: (val) => val + " ETB",
        },
        { text: "Country", value: "address", format: (val) => val.county },
        { text: "Region", value: "address", format: (val) => val.region },
        { text: "City", value: "address", format: (val) => val.city },
        { text: "Property Status", value: "property_status" },
      ],
    };
  },
  methods: {
    async getPropertyList() {
      await this.adminService.getProperties(this.Receiver);
    },
    NavigateToDetailPage(id) {
      this.$router.push({ name: "property_detail", params: { id } });
    },
  },
  async created() {
    this.adminService = new AdminService(this);
    await this.getPropertyList();
  },
};
</script>
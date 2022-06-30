<template>
  <v-container fluid>
    <v-row>
      <v-col class="mx-5">
        <v-alert dense text class="mt-3" icon="fa-chart-area">
          <span class="body-2">Statistics</span>
        </v-alert>

        <v-skeleton-loader
          v-if="!Receiver.loaded"
          type="table"
        ></v-skeleton-loader>
        <dir v-else>
          <v-row>
            <v-col cols="5">
              <DictTable
                title="Statistics"
                :data="Receiver.data"
                :header="headers"
              />
            </v-col>
          </v-row>
        </dir>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { AdminService } from "../../../services/admin.service";
import DictTable from "../../../components/DictTable.vue";

export default {
  name: "statistics_vue",
  components: {
    DictTable,
  },
  data() {
    return {
      Receiver: {
        data: null,
        loaded: false,
        error: null,
      },
      headers: [
          { text: "Total Users", value: "total_users" },
          { text: "Total Properties", value: "total_properties" },
          { text: "Total Rent Requests", value: "total_rent_requests" },
          { text: "Total Rents", value: "total_rents" },
          ],
    };
  },
  async created() {
    this.adminService = new AdminService(this);
    await this.adminService.getStatistics(this.Receiver);
  },
};
</script>
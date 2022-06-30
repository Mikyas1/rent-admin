<template>
  <div>
    <v-app-bar app color="primary accent-4" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-icon>fa-align-left</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/">
          <span class="white--text h2 mr-2">Betoch Admin</span>
          <v-icon small class="mb-2">fa-house</v-icon>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="mr-4">
          <v-icon class="mr-2 mb-1" small>fa-user</v-icon>
          <span class="mr-2">Admin User</span>
      </div>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app left color="white">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <h2 class="logo1">
                <span class="primary--text">Betoch Admin</span>
                <v-icon small class="mb-2" color="primary">fa-house</v-icon>
            </h2>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item-group v-model="selectedItem" color="secondary">
          <v-list-item
            color="primary"
            v-for="(item, i) in items"
            :key="i"
            router
            v-bind:to="{ name: item.route }"
          >
            <v-list-item-icon>
              <v-icon small v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "nav_bar",
  data() {
      return {
          drawer: false,
          selectedItem: 0,
          items: [
              { text: 'Properties', icon: 'fa-home-user', route: 'property_list' },
              { text: 'Statistics', icon: 'fa-chart-area', route: 'statistics' },
              // { text: 'My rents', icon: 'fa-key', route: 'my_rents' },
              // { text: 'Recived Rent Requests', icon: 'fa-inbox', route: 'recived_rent_requests' },
              // { text: 'Messages', icon: 'fa-comment-alt', route: 'driver_list' },
              // { text: 'My Rent Requests', icon: 'fa-database', route: 'my_rent_requests' },
              // { text: 'My Rented Properties', icon: 'fa-handshake', route: 'my_rented_properties' },
          ],
      }
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.logo1 {
    border-bottom: 1px solid blue;
    padding-top: 10px;
    padding-bottom: 14px;
}
</style>

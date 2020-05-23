<template>
<v-app id="inspire">
  <v-navigation-drawer v-model="drawerRight" app clipped right>
    <v-list dense>
      <v-list-item @click.stop="right = !right">
        <v-list-item-action>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Open Temporary Drawer</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app clipped-right color="blue-grey" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="login">
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn icon @click="changeTheme">
      <v-icon>mdi-weather-night</v-icon>
    </v-btn>
    <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item @click.stop="left = !left">
        <v-list-item-action>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Open Temporary Drawer</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer>

  <v-content class="align-middle items-center">
    <v-container fluid>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-container>
  </v-content>

  <v-navigation-drawer v-model="right" fixed right temporary></v-navigation-drawer>

  <v-footer app color="blue-grey" class="white--text">
    <span>Vuetify</span>
    <v-spacer></v-spacer>
    <span>&copy; 2019</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
    drawerRight: false,
    right: false,
    left: false,
  }),
  mounted() {
    window.vm = this
    this.initTheme()
  },
  methods: {
    initTheme() {
      this.$vuetify.theme.dark = localStorage.theme == undefined || localStorage.theme == 'true'
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.theme = this.$vuetify.theme.dark
    },
    login() {
      this.$router.push('/mails')
    }
  }
}
</script>

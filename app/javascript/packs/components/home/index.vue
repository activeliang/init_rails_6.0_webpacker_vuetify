<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
  <v-layout
    text-center
    wrap
  >
    <v-flex xs12>
      <v-img
        :src="require('../../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      ></v-img>
    </v-flex>

    <v-flex
      mb-5
      xs12
    >
      <h2 class="headline font-weight-bold mb-3">What's next?</h2>

      <v-layout justify-center>
        <a
          v-for="(next, i) in whatsNext"
          :key="i"
          :href="next.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ next.text }}
        </a>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      mb-5
    >
      <h2 class="headline font-weight-bold mb-3">Important Links</h2>

      <v-layout justify-center>
        <a
          v-for="(link, i) in importantLinks"
          :key="i"
          :href="link.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ link.text }}
        </a>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      mb-5
    >
      <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

      <v-layout justify-center>
        <a
          v-for="(eco, i) in ecosystem"
          :key="i"
          :href="eco.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ eco.text }}
        </a>
      </v-layout>
      <v-row justify="space-around">
  <v-icon>mdi-anchor</v-icon>

  <v-icon>mdi-xbox-controller</v-icon>

  <v-icon>mdi-watch</v-icon>

  <v-icon>mdi-tilde</v-icon>

  <v-icon>mdi-tennis</v-icon>

  <v-icon>mdi-mouse</v-icon>
  <v-app-bar-nav-icon></v-app-bar-nav-icon>

</v-row>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    ecosystem: [
  {
    text: 'vuetify-loader',
    href: 'https://github.com/vuetifyjs/vuetify-loader',
  },
  {
    text: 'github',
    href: 'https://github.com/vuetifyjs/vuetify',
  },
  {
    text: 'awesome-vuetify',
    href: 'https://github.com/vuetifyjs/awesome-vuetify',
  },
],
importantLinks: [
  {
    text: 'Documentation',
    href: 'https://vuetifyjs.com',
  },
  {
    text: 'Chat',
    href: 'https://community.vuetifyjs.com',
  },
  {
    text: 'Made with Vuetify',
    href: 'https://madewithvuejs.com/vuetify',
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/vuetifyjs',
  },
  {
    text: 'Articles',
    href: 'https://medium.com/vuetify',
  },
],
whatsNext: [
  {
    text: 'Explore components',
    href: 'https://vuetifyjs.com/components/api-explorer',
  },
  {
    text: 'Select a layout',
    href: 'https://vuetifyjs.com/layout/pre-defined',
  },
  {
    text: 'Frequently Asked Questions',
    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
  },
],
  }),
};
</script>

<style lang='scss' scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

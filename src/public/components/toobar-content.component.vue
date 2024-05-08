<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toobar-content",
  components: {LanguageSwitcher},
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToFormUser() {
      this.$router.push('/form');
    },
    goToListDetail() {
      this.$router.push('/list-detail');
    },
    goToCardUser() {
      this.$router.push('/profile');
    }
  }
}
</script>

<template>
  <pv-toolbar style="padding: 0.5rem 0.5rem 0.5rem 1rem;background-color: #60dd8d;">
    <template #start>
      <h3>Twiter Fake</h3>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <pv-button @click="goToHome" :label="$t('navegation.home')" text plain />
        <pv-button @click="goToFormUser" :label="$t('navegation.form')" text plain />
        <pv-button @click="goToListDetail" :label="$t('navegation.details-list')" text plain />
        <pv-button @click="goToCardUser" :label="$t('navegation.profile')" text plain />
      </div>
      <language-switcher></language-switcher>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>

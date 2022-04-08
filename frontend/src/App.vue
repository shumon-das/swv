<script setup lang="ts">
  import { useToast } from "primevue/usetoast"
  import Breadcrumb from "./views/BreadCrumb.vue"

    const toast = useToast()
    let text = ""

    
  const covi = () => {
      text = 'Covi Analytics'
      toast.add({severity:'success', summary: 'Toast Message', detail:text, life: 1000})
    }

</script>

<template>
<div class="row">
  <Breadcrumb />
</div>

<div class="row">
  <Toast position="top-right" />
  <Button label="Toast" icon="pi pi-user" @click="covi"/>
</div>

<div class="row">
    <router-view />
</div>
</template>

<style>
@import '@/assets/base.css';

body{
  display: block !important;;
}

.row{
  padding: 20px 10px;
}

#app {
  /* max-width: 1280px; */
  margin: 0;
  padding: 2rem;
  font-weight: normal;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
#app > header > nav > ul {
  padding: 0px 10px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
header > nav > ul > li > a{
  text-decoration: none;
    color: black;
    padding: 0;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  /* #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  } */

  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin: 0px;
  }
}
</style>

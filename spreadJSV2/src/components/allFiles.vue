<template>
    <div>
      <h1>File List</h1>
      <ul>
        <li v-for="file in files" :key="file">{{ file }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { Api } from '../api/api';
  
  export default {
    data() {
      return {
        files: [],
      };
    },
    async created() {
      const api = new Api({ baseURL: 'http://localhost:80' });
      this.files = await api.getAll();
    },
  };
  </script>
  
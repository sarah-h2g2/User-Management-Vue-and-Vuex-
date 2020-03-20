<template>
  <div id="app">
   <div class="main">
      <ul>
        <li v-for="user in users" :key="user._id">
          <button @click="removeUser(user)">Remove User</button>
          <UserInfo :name="user.name" :email="user.email"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from './components/Card';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
      UserInfo: Card
  },
  mounted() {
      this.$store.dispatch('getUsers')
      console.log('users', this.users);
  },
  computed: {
    ...mapState({
       users: state => state.users
    })
  },
  methods: {
      removeUser(user) {
        this.$store.commit('REMOVE_USER', user)
      }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

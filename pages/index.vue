<template>
  <div class="login-container">
    <div id="particles-bg" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway" 
      rel="stylesheet">
    <div class="login">
      <img src="~assets/images/Fill1.png">
      <input
        v-model="code"
        type="text"
        placeholder="ENTER CODE">
      <button @click.stop.prevent="validateCode()"> ENTER SITE </button>
      <p v-if="error">There seems to be something wrong with your code.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      error: false
    }
  },
  mounted: function() {
    this.$particles()
    this.mountBackground()
  },
  methods: {
    mountBackground: function() {
      particlesJS.load('particles-bg', '/config.json', function() {
        console.log('loaded')
      })
    },
    validateCode: function() {
      if (this.code.toUpperCase() === 'ALBETCHA123') {
        this.$router.push('/' + this.code)
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style>
html,
body {
  min-height: 100vh;
}
.login-container {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.5px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
}

.login-container p {
  padding: 2em;
  color: red;
}

.login-container img {
  margin-bottom: 1em;
}

.login-container input {
  border: 0;
  border-bottom: 1px rgb(217, 217, 217) solid;
  padding: 10px;
  text-align: center;
  transition: 0.3s ease-out all;
  margin-bottom: 2em;
  text-transform: uppercase;
}

.login-container input:focus {
  outline: none;
  transform: scale(1.1);
  padding: 2em;
  transition: 0.3s ease-out all;
}
.login-container button {
  background: #232751;
  color: #fff;
  border: 0;
  padding: 1em 3em;
}

.login-container button:hover {
  backgorund: #383d72;
}

.login-container .login {
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;
  z-index: 4;
  padding: 30px;
  box-shadow: 0px 0px 1000px 0px rgba(0, 0, 0, 0.051);
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgb(217, 217, 217);
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: rgb(217, 217, 217);
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: rgb(217, 217, 217);
}
:-moz-placeholder {
  /* Firefox 18- */
  color: rgb(217, 217, 217);
}

#particles-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}
</style>

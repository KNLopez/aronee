<template>
  <div class="login-container">
    <div id="particles-bg" />
    <link
      href="https://fonts.googleapis.com/css?family=Raleway" 
      rel="stylesheet">
    <img
      class="login-bg"
      src="~assets/images/bg-login.png">
    <div class="login">
      <div class="input-container">
        <img src="~assets/images/Fill1.png">
        <input
          v-model="code"
          type="text"
          placeholder="ENTER CODE">
        <button @click.stop.prevent="validateCode()"> ENTER SITE </button>
        <p v-if="error">There seems to be something wrong with your code.</p>
      </div>
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
      document.ontouchmove = function(e) {
        e.preventDefault()
      }
    },
    validateCode: function() {
      if (this.code.toUpperCase() === 'DINAGYANG') {
        this.$router.push('/home')
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
  text-align: center;
  margin: 0 auto;
  background: #fff;
  background-size: auto 100%;
  background-position: center center;
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
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
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
  width: 100%;
}

.login-container button:hover {
  backgorund: #383d72;
}

.login-container .login {
  position: relative;
  z-index: 4;
  width: 80%;
  height: 50vh;
  min-height: 300px;
  max-height: 450px;
  max-width: 480px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container .input-container {
  max-width: 250px;
  padding: 40px;
}

.login-bg {
  position: absolute;
  opacity: 0.5;
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

@media only screen and (max-width: 720px) {
  .input-container img {
    width: 80px;
  }

  .login-bg {
    display: none;
  }

  .login-container {
    background: url('~assets/images/mobile-bg.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 0;
    height: 100%;
    z-index: 2;
  }
  .login-container .login {
    height: 350px;
    min-height: 35vh;
    width: 70%;
    min-height: auto;
    background: transparent;
  }

  .login-bg {
    position: absolute;
    width: 110%;
  }
}
</style>

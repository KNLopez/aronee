<template>
  <section class="container text-center">
    <div class="hero">
      Albet and Aronee
    </div>
    <div class="grid-container">
      <div class="intro-text">
        <p>With the blessing of God and our families,<br> we would like to invite you on our wedding day.</p>
        <h2>January 28, 2019</h2>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/hero-background.jpg">
        </div>
        <p>Our wedding will take place at</p>
        <h3>St.Celement's Church Iloilo </h3>
        <p>The ceremony will start at</p>
        <h3>2:00 in the afternoon</h3>
        <a> VIEW ON MAP </a>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/hero-background.jpg">
        </div>
        <p>Dinner and (a lot of) dancing to follow at</p>
        <h3>Sheridan Boutique Resort</h3>
        <a> VIEW ON MAP </a>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/hero-background.jpg">
        </div>
        <p>RSVP</p>
        <h3>Jerly</h3>
        <p class="phone-number">09778342073</p>
        <a> VIEW ON MAP </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
:root {
  --main-color: #71748d;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: cursive;
  color: var(--main-color);
}
.container {
  background: #fefefe;
}

.text-center {
  text-align: center;
}

.hero {
  background: url('~assets/images/hero-background.jpg');
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.grid-container {
  max-width: 1100px;
  margin: 0 auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

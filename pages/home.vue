<template>
  <section class="container text-center">
    <div class="hero">
      <h1>Albet and Aronee</h1>
      <p>#BETterwithCHA</p>
    </div>
    <div class="grid-container">
      <div class="intro-text">
        <p>With the blessing of God and our families,<br> we would like to invite you on our wedding day.</p>
        <h2>January 28, 2019</h2>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/stclements.jpg">
        </div>
        <div class="info-card--text">
          <p>Our wedding will take place at</p>
          <h3>St.Celement's Church Iloilo </h3>
          <p>The ceremony will start at</p>
          <h3>2:00 in the afternoon</h3>
          <a href="https://maps.google.com/?saddr=My%20Location&daddr=St.+Clement's+Church,+Iloilo"> GET DIRECTIONS </a>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/sheridan.jpg">
        </div>
        <div class="info-card--text">
          <p>Dinner and (a lot of) dancing to follow at</p>
          <h3>Sheridan Boutique Resort</h3>
          <a href="https://maps.google.com/?saddr=My%20Location&daddr=Sheridan+Boutique+Resort,+Oton,+Iloilo"> GET DIRECTIONS </a>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/rsvp.jpg">
        </div>
        <div class="info-card--text">
          <p>RSVP</p>
          <h3>Jerly</h3>
          <a 
            href="tel:09778342073"
            class="hashtag">09778342073</a>
          <p> click to call </p>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card--text">
          <p>Attire and Clothing</p>
          <h3>What to wear</h3>
          <img src="~assets/images/gentlemen.jpg">
          <p>Gentlemen | Suit and Tie</p>
          <br>
          <img src="~assets/images/ladies.jpg">
          <p>Ladies | Long gown or Midi</p>
          <br>
          <h3>color palette</h3>
          <img src="~assets/images/palette.jpg">
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/gifts.jpg">
        </div>
        <div class="info-card--text">
          <h3>Gifts</h3>
          <p>Your presence at our wedding is enough but if we are honored with a gift from you, a gift that fits the envelope will do. </p>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-image">
          <img src="~assets/images/betterwithcha.jpg">
        </div>
        <div class="info-card--text">
          <p>Are you taking pictures?<br>Help us capture our moments by using the hashtag</p>
          <h3 class="hashtag">#BETterwithCHA</h3>
          <p>We can't wait to see your images</p>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card--text">
          <h3>Kindly Remember</h3>
          <h4>On taking photos</h4>
          <p>Avoid crossing or blocking the aisle during the ceremony.</p>
          <h4>On phones and other gadgets</h4>
          <p>Please keep them in silent mode.</p>
          <h4>ON BRINGING SOMEONE ALONG</h4>
          <p>As much as we would like to accomodate everyone, we can only accomodate those who are invited.</p>
        </div>
      </div>
      <div class="intro-text">
        <p>with love</p>
        <h2>Albet and Aronee</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted: function() {
    this.mountAnimation()
  },
  methods: {
    mountAnimation: function() {
      let cards = document.querySelectorAll('.info-card')
      if (cards) {
        window.onscroll = function() {
          cards.forEach(card => {
            if (
              card.getBoundingClientRect().top <=
              Math.floor(window.innerHeight / 1.1)
            ) {
              card.classList.add('show')
            } else {
              card.classList.remove('show')
            }
          })
        }
      }
    }
  }
}
</script>

<style>
.hero {
  background: url('~assets/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: var(--white-color, #fff);
}

.hero h1 {
  color: var(--white-color, #fff);
}

.hero p {
  color: var(--white-color, #fff);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.intro-text {
  padding: 4em 0;
}

.info-card {
  max-width: 480px;
  background: var(--white-color, #fff);
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  margin: 0 auto 3em;
  transform: translateY(50px);
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  transition: 1s ease all;
}

.show {
  transform: translateY(0);
  opacity: 1;
  transition: 1s ease all;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}

.info-card--text {
  padding: 1em 3em 3em;
}

.info-card--text a {
  color: var(--main-color);
}

.info-card--text .hashtag {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-bottom: 0.5em;
  font-size: 2em;
}
.info-card--text h4 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.grid-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px 3em;
}

@media only screen and (max-width: 720px) {
  .info-card--text {
    padding: 1em 2em 3em;
  }
  .intro-text {
    padding: 2em 0;
  }
}
</style>

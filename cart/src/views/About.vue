
<template>
  <div id="all">
      <header>
       <img src="@/assets/graphics/graphics-header.svg" alt="header" />
        <a @click="$router.push({ path: '/nav' })">
          <img src="@/assets/graphics/bag.svg" alt="bag"  @click="nav"/>
        </a>
        </header>
      <article>
        <h>Vårt Kaffe</h>
        <h3>
          Pumpkin spice mug, barista cup, sit
          macchiato, kopi-luwak, doppio, grounds
          dripper, crema, strong whipped, variety
          extra iced id lungo half and half mazagran.
          Pumpkin spice.
        </h3>
        <p>
          Que dark fair trade, spoon decaffeinated, barista
          wings whipped, as rich aftertaste, con panna milk
          black, arabica white rich beans single shot extra
          affogato. So affogato macchiato sit extraction
          instant grinder seasonal organic, turkish single shot,
          single origin, and robusta strong to go so dripper.
          Viennese froth, grounds caramelization skinny
          aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut
          bar instant kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran
          milk fair trade est aroma a half and half and, so,
          galão iced to go, whipped as cream cup pumpkin
          spice iced. At extra, rich grinder, brewed to go,
          steamed half and half at, that, percolator macchiato
          trifecta and body as arabica dripper. In galão black
          java milk sit trifecta, robusta, acerbic café au lait
          instant shop latte. Seasonal bar shop filter aroma id,
          crema, affogato viennese cultivar aftertaste,
          seasonal, percolator cream black, galão flavour, milk
          aromatic turkish skinny crema.
        </p>
      </article>
      <div class="img-info">
        <img src="@/assets/graphics/eva-cortado.jpg" alt="Eva" />
        <p>Eva Cortado</p>
        <span class="evaSpan">VD &amp; Grundare</span>
      </div>
      <img src="@/assets/graphics/graphics-footer.svg" alt="footer" />
    </div>

</template>

<script>
export default {
  components: {
  },
  data: () => {
    return {
      openNav: false
    };
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    },
  }
};
</script>

<style  scoped>

#all{
  height: 50%;
  text-align: center;
  color: black;
  background-color: rgb(238, 225, 226);
}

article {
  margin-left: 20%;
  margin-right: 20%;
  width: 60%;
  text-align: center;
}
article h {
  text-align: center;
  padding-top: 2rem;
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.726);
}
.evaSpan {
  align-items: center;
  margin-left: 0px;
}
article p {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
}
article h3 {
  font-family: Arial, Helvetica, sans-serif ;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
}
.img-info p {
  font-size: 2rem;
  font-weight: bold;
  margin: 1.5rem;
}
.img-info span {
  font-size: 1.8rem;
}
.img-info {
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-left: 3rem;
}
img[alt="Eva"] {
  border-radius: 50%;
}
img[alt="header"] {
  width: 100%;
}
img[alt="footer"] {
  width: 100%;
}
img[alt="bag"] {
  text-align: left;
  width: 75px;
  right: 46rem;
  bottom: 30rem;
  position: relative;
  cursor: pointer;
}
.y-btn {
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 40px;
  font-weight: 400;
  padding: 1px;
  color: #2c2c24;
  border: none;

  background-color: #fdfdfd;
  text-align: center;
  vertical-align: middle;
}

</style>
<template>
  <div>
    <div class="container-fluid mt-1">
      <div class="row header-box">
        <div class="col-1">
          <span class="material-icons md-18 location-icon mt-1"
            >location_on</span
          >
        </div>
        <div class="col-7">
          <h6 class="mt-2">My home</h6>
        </div>
        <div class="col-4 text-end">
          <span class="material-icons md-18 user-icon">account_circle</span>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-3">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.gstatic.com/webp/gallery/1.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.gstatic.com/webp/gallery/5.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.gstatic.com/webp/gallery/4.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
            </div>

            <!-- Left and right controls/icons -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        <h5 class="side-head">Shops types</h5>
        <div class="col-4 pt-1">
          <div class="chip">
            <div class="chip-content">Chip Content</div>
          </div>
        </div>
        <div class="col-4 pt-1">
          <div class="chip">
            <div class="chip-content">Chip Content</div>
          </div>
        </div>
        <div class="col-4 pt-1">
          <div class="chip">
            <div class="chip-content">Chip Content</div>
          </div>
        </div>
        <div class="col-4 pt-1">
          <div class="chip">
            <div class="chip-content">Chip Content</div>
          </div>
        </div>
      </div>

      <div class="row">
        <h6 class="side-head mt-3">Your partners</h6>

        <div class="col-6 mt-2">
          <!-- Card -->
          <div class="card">
            <!--Card image-->
            <div>
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title">Makkuni Store</h6>
            </div>
          </div>
          <!-- Card -->
        </div>
        <div class="col-6 mt-2">
          <!-- Card -->
          <div class="card">
            <!--Card image-->
            <div>
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title">Makkuni Store</h6>
            </div>
          </div>
          <!-- Card -->
        </div>
        <div class="col-6 mt-2">
          <!-- Card -->
          <div class="card">
            <!--Card image-->
            <div>
              <img
                class="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title">Makkuni Store</h6>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>

      <div class="card-deck row mt-4">
        <h5 class="side-head">Products for you</h5>
        <div class="col-6 mt-2">
          <div class="card">
            <img
              src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsimplyalgerian.files.wordpress.com%2F2011%2F09%2Fyahni.jpg&f=1"
              alt="Denim Jeans"
              style="width:100%"
            />
            <h6 class="product-name mt-2">Tandoori</h6>
            <p class="hotel">Food cafe</p>
            <p class="price">$19.99</p>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card">
            <img
              src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F46%2Faa%2F72%2F46aa728c96e206ed218a0beb8df2a1c3.jpg&f=1"
              alt="Denim Jeans"
              style="width:100%"
            />
            <h6 class="product-name mt-2">Alfam</h6>
            <p class="hotel">Cafe Holiday</p>
            <p class="price">$19.99</p>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card">
            <img
              src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fsimplyalgerian.files.wordpress.com%2F2011%2F09%2Fyahni.jpg&f=1"
              alt="Denim Jeans"
              style="width:100%"
            />
            <h6 class="product-name mt-2">Tandoori</h6>
            <p class="hotel">Food cafe</p>
            <p class="price">$19.99</p>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="card">
            <img
              src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F46%2Faa%2F72%2F46aa728c96e206ed218a0beb8df2a1c3.jpg&f=1"
              alt="Denim Jeans"
              style="width:100%"
            />
            <h6 class="product-name mt-2">Alfam</h6>
            <p class="hotel">Cafe Holiday</p>
            <p class="price">$19.99</p>
          </div>
        </div>
      </div>
    </div>
    <button @click="logout">lo</button>
    <div class="cart-div">
      <span class="count">1</span>
      <span class="material-icons md-18 cart-icon">shopping_cart</span>
    </div>
  </div>
</template>

<script>
// import Layout from "@/components/layout/layout.vue";
import auth from "@/mixins/auth/auth.js";

export default {
  components: {},
  mixins: [auth],
  data() {
    return {};
  },
  async mounted() {
    await this.setUserState();
  },
  methods: {},
};
</script>

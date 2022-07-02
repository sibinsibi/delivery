<template>
  <div class="overlay">
    <div class="loader">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style>
.overlay {
  position: fixed; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}

.loader {
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
}

.spinner {
  height: 5vh;
  width: 5vh;
  border: 6px solid white;
  border-top-color: #dc3545;
  border-radius: 100%;
  animation: rotation 0.6s infinite linear 0.25s;
  top: 50%;
  position: absolute;

  /* the opacity is used to lazyload the spinner, see animation delay */
  /* this avoid the spinner to be displayed when visible for a very short period of time */
  opacity: 0;
}

@keyframes rotation {
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(359deg);
  }
}
</style>

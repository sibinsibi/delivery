<template>
  <header class="app-header fixed-top">
    <div class="app-header-inner">
      <div class="container-fluid py-2">
        <div class="app-header-content">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <a
                id="sidepanel-toggler"
                class="sidepanel-toggler d-inline-block d-xl-none"
                @click="toggleNavbar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  role="img"
                >
                  <title>Menu</title>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M4 7h22M4 15h22M4 23h22"
                  ></path>
                </svg>
              </a>
            </div>
            <!--//col-->
            <div class="search-mobile-trigger d-sm-none col">
              <i class="search-mobile-trigger-icon fas fa-search"></i>
            </div>
            <!--//col-->
            <!-- <div class="app-search-box col">
              <form class="app-search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  name="search"
                  class="form-control search-input"
                />
                <button
                  type="submit"
                  class="btn search-btn btn-primary"
                  value="Search"
                >
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>-->
            <!--//app-search-box-->

            <div class="app-utilities col-auto">
              <div class="app-utility-item app-notifications-dropdown dropdown">
                <a
                  class="dropdown-toggle no-toggle-arrow"
                  id="notifications-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  title="Notifications"
                >
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-bell icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                    <path
                      fill-rule="evenodd"
                      d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                    />
                  </svg>
                  <span class="icon-badge">3</span>
                </a>
                <!--//dropdown-toggle-->

                <div
                  class="dropdown-menu p-0"
                  aria-labelledby="notifications-dropdown-toggle"
                >
                  <div class="dropdown-menu-header p-3">
                    <h5 class="dropdown-menu-title mb-0">Notifications</h5>
                  </div>
                  <!--//dropdown-menu-title-->
                  <div class="dropdown-menu-content">
                    <div class="item p-3">
                      <div
                        class="row gx-2 justify-content-between align-items-center"
                      >
                        <div class="col-auto">
                          <img
                            class="profile-image"
                            src="assets/images/profiles/profile-1.png"
                            alt=""
                          />
                        </div>
                        <!--//col-->
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              Amy shared a file with you. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit.
                            </div>
                            <div class="meta">2 hrs ago</div>
                          </div>
                        </div>
                        <!--//col-->
                      </div>
                      <!--//row-->
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <!--//item-->
                    <div class="item p-3">
                      <div
                        class="row gx-2 justify-content-between align-items-center"
                      >
                        <div class="col-auto">
                          <div class="app-icon-holder">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-receipt"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                              />
                            </svg>
                          </div>
                        </div>
                        <!--//col-->
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              You have a new invoice. Proin venenatis interdum
                              est.
                            </div>
                            <div class="meta">1 day ago</div>
                          </div>
                        </div>
                        <!--//col-->
                      </div>
                      <!--//row-->
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <!--//item-->
                    <div class="item p-3">
                      <div
                        class="row gx-2 justify-content-between align-items-center"
                      >
                        <div class="col-auto">
                          <div class="app-icon-holder icon-holder-mono">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-bar-chart-line"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                              />
                            </svg>
                          </div>
                        </div>
                        <!--//col-->
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              Your report is ready. Proin venenatis interdum
                              est.
                            </div>
                            <div class="meta">3 days ago</div>
                          </div>
                        </div>
                        <!--//col-->
                      </div>
                      <!--//row-->
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <!--//item-->
                    <div class="item p-3">
                      <div
                        class="row gx-2 justify-content-between align-items-center"
                      >
                        <div class="col-auto">
                          <img
                            class="profile-image"
                            src="assets/images/profiles/profile-2.png"
                            alt=""
                          />
                        </div>
                        <!--//col-->
                        <div class="col">
                          <div class="info">
                            <div class="desc">
                              James sent you a new message.
                            </div>
                            <div class="meta">7 days ago</div>
                          </div>
                        </div>
                        <!--//col-->
                      </div>
                      <!--//row-->
                      <a class="link-mask" href="notifications.html"></a>
                    </div>
                    <!--//item-->
                  </div>
                  <!--//dropdown-menu-content-->

                  <div class="dropdown-menu-footer p-2 text-center">
                    <a href="notifications.html">View all</a>
                  </div>
                </div>
                <!--//dropdown-menu-->
              </div>
              <!--//app-utility-item-->
              <div class="app-utility-item">
                <a href="" onclick="location.reload();" title="Settings">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-code-square"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"
                    ></path>
                  </svg>
                </a>
              </div>
              <!--//app-utility-item-->

              <div class="app-utility-item app-user-dropdown dropdown">
                <a
                  class="dropdown-toggle"
                  id="user-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  ><img src="img/web/user.svg" alt="user profile"
                /></a>

                <ul
                  class="dropdown-menu"
                  aria-labelledby="user-dropdown-toggle"
                >
                  <li>
                    <div class="dropdown-item">
                      {{ $store.state.user.email }}
                    </div>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="account.html">Account</a>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" @click="logout">Log Out</a>
                  </li>
                </ul>
              </div>
              <!--//app-user-dropdown-->
            </div>
            <!--//app-utilities-->
          </div>
          <!--//row-->
        </div>
        <!--//app-header-content-->
      </div>
      <!--//container-fluid-->
    </div>
    <!--//app-header-inner-->
    <div id="app-sidepanel" class="app-sidepanel">
      <div id="sidepanel-drop" class="sidepanel-drop"></div>
      <div class="sidepanel-inner d-flex flex-column">
        <a
          @click="toggleNavbar"
          id="sidepanel-close"
          class="sidepanel-close d-xl-none"
          >&times;</a
        >
        <div class="app-branding">
          <router-link class="app-logo" to="/"
            ><img
              class="logo-icon me-2"
              src="img/web/app-logo.svg"
              alt="logo"
            /><span class="logo-text">KOKACHI</span></router-link
          >
        </div>
        <div class="text-center">{{ $store.state.user.name }}</div>
        <!--//app-branding-->

        <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
          <ul class="app-menu list-unstyled accordion" id="menu-accordion">
            <li class="nav-item">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <router-link class="nav-link" to="/">
                <span class="nav-icon">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-house-door"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                <span class="nav-link-text">Dashboard</span>
              </router-link>
              <!--//nav-link-->
            </li>
            <!--//nav-item-->
            <li class="nav-item">
              <router-link class="nav-link" to="/live_orders">
                <span class="nav-icon">
                  <svg class="svg-icon bi bi-receipt" viewBox="0 0 20 20">
                    <path
                      d="M6.634,13.591H2.146c-0.247,0-0.449,0.201-0.449,0.448v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449v-2.692C7.083,13.792,6.881,13.591,6.634,13.591 M6.185,16.283h-3.59v-1.795h3.59V16.283zM6.634,8.205H2.146c-0.247,0-0.449,0.202-0.449,0.449v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V8.653C7.083,8.407,6.881,8.205,6.634,8.205 M6.185,10.897h-3.59V9.103h3.59V10.897z M6.634,2.819H2.146c-0.247,0-0.449,0.202-0.449,0.449V5.96c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V3.268C7.083,3.021,6.881,2.819,6.634,2.819 M6.185,5.512h-3.59V3.717h3.59V5.512z M15.933,5.683c-0.175-0.168-0.361-0.33-0.555-0.479l1.677-1.613c0.297-0.281,0.088-0.772-0.31-0.772H9.336c-0.249,0-0.448,0.202-0.448,0.449v7.107c0,0.395,0.471,0.598,0.758,0.326l1.797-1.728c0.054,0.045,0.107,0.094,0.161,0.146c0.802,0.767,1.243,1.786,1.243,2.867c0,1.071-0.435,2.078-1.227,2.837c-0.7,0.671-1.354,1.086-2.345,1.169c-0.482,0.041-0.577,0.733-0.092,0.875c0.687,0.209,1.12,0.314,1.839,0.314c0.932,0,1.838-0.173,2.673-0.505c0.835-0.33,1.603-0.819,2.262-1.449c1.322-1.266,2.346-2.953,2.346-4.751C18.303,8.665,17.272,6.964,15.933,5.683 M15.336,14.578c-1.124,1.077-2.619,1.681-4.217,1.705c0.408-0.221,0.788-0.491,1.122-0.812c0.97-0.929,1.504-2.168,1.504-3.485c0-1.328-0.539-2.578-1.521-3.516c-0.178-0.17-0.357-0.321-0.548-0.456c-0.125-0.089-0.379-0.146-0.569,0.041L9.769,9.327v-5.61h5.861l-1.264,1.216c-0.099,0.094-0.148,0.229-0.137,0.366c0.014,0.134,0.088,0.258,0.202,0.332c0.313,0.204,0.61,0.44,0.882,0.7c1.158,1.111,2.092,2.581,2.092,4.145C17.405,12.026,16.48,13.482,15.336,14.578"
                    ></path>
                  </svg>
                </span>
                <span class="nav-link-text">Pending Orders</span>
              </router-link>
            </li>
            <!--//nav-item-->

            <li class="nav-item has-submenu">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <a
                class="nav-link submenu-toggle"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-5"
                aria-expanded="false"
                aria-controls="submenu-5"
              >
                <span class="nav-icon">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->

                  <svg class="svg-icon bi bi-columns-gap" viewBox="0 0 20 20">
                    <path
                      d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"
                    ></path>
                  </svg>
                </span>
                <span class="nav-link-text">Order Management</span>
                <span class="submenu-arrow">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
                <!--//submenu-arrow-->
              </a>
              <!--//nav-link-->
              <div
                id="submenu-5"
                class="collapse submenu submenu-5"
                data-bs-parent="#menu-accordion"
              >
                <ul class="submenu-list list-unstyled">
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/current_orders"
                      >Current Orders</router-link
                    >
                  </li>
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/get_orders"
                      >Get Orders</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item has-submenu">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <a
                class="nav-link submenu-toggle"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-2"
                aria-expanded="false"
                aria-controls="submenu-2"
              >
                <span class="nav-icon">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->

                  <svg class="svg-icon bi bi-columns-gap" viewBox="0 0 20 20">
                    <path
                      d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"
                    ></path>
                  </svg>
                </span>
                <span class="nav-link-text">Shop Management</span>
                <span class="submenu-arrow">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
                <!--//submenu-arrow-->
              </a>
              <!--//nav-link-->
              <div
                id="submenu-2"
                class="collapse submenu submenu-2"
                data-bs-parent="#menu-accordion"
              >
                <ul class="submenu-list list-unstyled">
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/add_shop"
                      >Add Shop</router-link
                    >
                  </li>
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/shops"
                      >Edit Shop</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item has-submenu">
              <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
              <a
                class="nav-link submenu-toggle"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-3"
                aria-expanded="false"
                aria-controls="submenu-2"
              >
                <span class="nav-icon">
                  <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                  <svg class="svg-icon bi bi-columns-gap" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"
                    ></path>
                  </svg>
                </span>
                <span class="nav-link-text">Item Management</span>
                <span class="submenu-arrow">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
                <!--//submenu-arrow-->
              </a>
              <!--//nav-link-->
              <div
                id="submenu-3"
                class="collapse submenu submenu-2"
                data-bs-parent="#menu-accordion"
              >
                <ul class="submenu-list list-unstyled">
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/add_item"
                      >Add Item</router-link
                    >
                  </li>
                  <li class="submenu-item">
                    <router-link class="submenu-link" to="/get_item"
                      >Edit Item</router-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <!--//nav-item-->
          </ul>
          <!--//app-menu-->
        </nav>
        <!--//app-nav-->
        <div class="app-sidepanel-footer">
          <nav class="app-nav app-nav-footer">
            <ul class="app-menu footer-menu list-unstyled">
              <li class="nav-item">
                <!--//Bootstrap Icons: https://icons.getbootstrap.com/ -->
                <a class="nav-link" href="settings.html">
                  <span class="nav-icon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-gear"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                      />
                    </svg>
                  </span>
                  <span class="nav-link-text">Settings</span>
                </a>
                <!--//nav-link-->
              </li>
            </ul>
            <!--//footer-menu-->
          </nav>
        </div>
        <!--//app-sidepanel-footer-->
      </div>
      <!--//sidepanel-inner-->
    </div>
    <!--//app-sidepanel-->
  </header>
</template>

<script>
import auth from "@/mixins/auth/auth.js";

export default {
  mixins: [auth],
  async mounted() {
    await this.setUserState();
  },
  methods: {
    toggleNavbar: function() {
      window.$("#app-sidepanel").toggleClass("sidepanel-visible");
    },
  },
};
</script>

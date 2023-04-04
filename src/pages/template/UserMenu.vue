<template>
  <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
    <!--begin::Menu wrapper-->
    <div class="cursor-pointer symbol symbol-30px symbol-md-40px show menu-dropdown" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
      <img src="template/media/avatars/150-26.jpg" alt="user">
    </div>
    <!--begin::Menu-->
    <div class="fs-6 fw-bold menu menu-column menu-gray-800 menu-rounded menu-state-bg menu-state-primary menu-sub menu-sub-dropdown py-4 w-275px" data-kt-menu="true" style="z-index: 105; position: fixed; inset: 0px 0px auto auto; margin: 0px; transform: translate(-30px, 65px);" data-popper-placement="bottom-end">
      <!--begin::Menu item-->
      <div class="menu-item px-3">
        <div class="menu-content d-flex align-items-center px-3">
          <!--begin::Avatar-->
          <div class="symbol symbol-50px me-5">
            <img alt="Logo" src="template/media/avatars/150-26.jpg">
          </div>
          <!--end::Avatar-->
          <!--begin::Username-->
          <div class="d-flex flex-column">
            <div class="fw-bolder d-flex align-items-center fs-5">Max Smith
              <span class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
            <a href="#" class="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
          </div>
          <!--end::Username-->
        </div>
      </div>
      <!--end::Menu item-->
      <!--begin::Menu separator-->
      <div class="separator my-2"></div>
      <!--end::Menu separator-->
      <!--begin::Menu item-->
      <div class="menu-item px-5">
        <a href="../../demo1/dist/account/overview.html" class="menu-link px-5">My Profile</a>
      </div>
      <!--end::Menu item-->
      <!--begin::Menu item-->
      <div class="menu-item px-5">
        <a href="../../demo1/dist/pages/projects/list.html" class="menu-link px-5">
          <span class="menu-text">My Projects</span>
          <span class="menu-badge">
            <span class="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
          </span>
        </a>
      </div>
      <!--end::Menu item-->
      <!--begin::Menu item-->
      <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
        <a href="#" class="menu-link px-5">
          <span class="menu-title">My Subscription</span>
          <span class="menu-arrow"></span>
        </a>
        <!--begin::Menu sub-->
        <div class="menu-sub menu-sub-dropdown w-175px py-4">
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="../../demo1/dist/account/referrals.html" class="menu-link px-5">Referrals</a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="../../demo1/dist/account/billing.html" class="menu-link px-5">Billing</a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="../../demo1/dist/account/statements.html" class="menu-link px-5">Payments</a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <a href="../../demo1/dist/account/statements.html" class="menu-link d-flex flex-stack px-5">Statements
              <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="View your statements" aria-label="View your statements"></i></a>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu separator-->
          <div class="separator my-2"></div>
          <!--end::Menu separator-->
          <!--begin::Menu item-->
          <div class="menu-item px-3">
            <div class="menu-content px-3">
              <label class="form-check form-switch form-check-custom form-check-solid">
                <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications">
                <span class="form-check-label text-muted fs-7">Notifications</span>
              </label>
            </div>
          </div>
          <!--end::Menu item-->
        </div>
        <!--end::Menu sub-->
      </div>
      <!--end::Menu item-->
      <!--begin::Menu item-->
      <div class="menu-item px-5 my-1">
        <a href="../../demo1/dist/account/settings.html" class="menu-link px-5">Account Settings</a>
      </div>
      <!--end::Menu item-->

      <!--begin::Menu item-->
      <div class="menu-item px-5">
        <a href="#" @click="logout" class="menu-link px-5">Exit</a>
      </div>
      <!--end::Menu item-->

      <!--begin::Menu separator-->
      <div class="separator my-2"></div>
      <!--end::Menu separator-->

      <!--begin::Menu item-->
      <div class="menu-item px-5">
        <div class="menu-content px-5">
          <label class="form-check form-switch form-check-custom form-check-solid pulse pulse-success" for="kt_user_menu_dark_mode_toggle">
            <input class="form-check-input w-30px h-20px" type="checkbox" value="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="../../demo1/dist/index.html">
            <span class="pulse-ring ms-n1"></span>
            <span class="form-check-label text-gray-600 fs-7">Dark Mode</span>
          </label>
        </div>
      </div>
      <!--end::Menu item-->
    </div>
    <!--end::Menu-->
    <!--end::Menu wrapper-->
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "UserMenu",

  methods:{
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      this.$store.dispatch('user', null)
      // window.location.href = '/login'
      this.$router.push('/login')
    }
  },

  computed: {
    ...mapGetters(['user'])
  },
}
</script>

<style scoped>

</style>
<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>O'connell</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="login-part d-flex align-center justify-center"
        >
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <div class="login-wrapper pt-md-4 pt-0">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>
                  <v-tab :href="`#tab-newUser`">
                    New User
                  </v-tab>

                  <v-tab-item :value="'tab-login'">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p
                              class="login-slogan display-2 text-center font-weight-medium my-10"
                            >
                              Good Morning, User
                            </p>
                            <v-btn
                              height="45"
                              block
                              color="white"
                              elevation="0"
                              class="google text-capitalize"
                            >
                              <v-img
                                src="@/assets/google.svg"
                                max-width="30"
                                class="mr-4"
                              ></v-img>
                              Sign in with Google</v-btn
                            >
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                v-model="email"
                                label="Email Address"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="password"
                                type="password"
                                label="Password"
                                hint="At least 6 characters"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                large
                                :disabled="
                                  password.length === 0 || email.length === 0
                                "
                                color="primary"
                                @click="login"
                              >
                                Login</v-btn
                              >
                              <v-btn
                                large
                                text
                                class="text-capitalize primary--text"
                                >Forget Password</v-btn
                              >
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                  <v-tab-item :value="'tab-newUser'">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p
                              class="login-slogan display-2 text-center font-weight-medium mt-10"
                            >
                              Welcome!
                            </p>
                            <p
                              class="login-slogan display-1 text-center font-weight-medium mb-10"
                            >
                              Create your account
                            </p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                label="Full Name"
                                required
                              ></v-text-field>
                              <v-text-field
                                label="Email Address"
                                required
                              ></v-text-field>
                              <v-text-field
                                type="password"
                                label="Password"
                                hint="At least 6 characters"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn large block color="primary" @click="login">
                                Create your account</v-btn
                              >
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-4">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>

                          <v-btn
                            height="45"
                            block
                            color="white"
                            elevation="0"
                            class="google text-capitalize"
                          >
                            <v-img
                              src="@/assets/google.svg"
                              max-width="30"
                              class="mr-4"
                            ></v-img>
                            Sign in with Google</v-btn
                          >
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  © 2014-2021
                  <a href="https://flatlogic.com/" class="text-decoration-none"
                    >O'connell</a
                  >, LLC. All rights reserved.
                </div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { LOGIN } from "../../store/constant.js";
export default {
  name: "Login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        identifier: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style src="./Login.scss" lang="scss" />

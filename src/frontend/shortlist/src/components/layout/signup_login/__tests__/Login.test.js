import { createLocalVue, describe, it, expect } from "vitest";
// import Vuex from 'vuex'; 
// import { createStore } from Vuex; 
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

// const localVue = createLocalVue()
// localVue.use(BootstrapVue)
// localVue.use(Vuex)
// localVue.use(Vuelidate)

// function createStore (overrides) {
//   const defaultStoreConfig = {

//   }
//   return new Vuex.Store(
//     merge(defaultStoreConfig, overrides)
//   )
// }

// function createWrapper (overrides) {
//   const defaultMountingOptions = {
//     localVue,
//     mocks: {
//       $router: { push: jest.fn() }
//     },
//     store: createStore()
//   }
//   return mount(Login, merge(defaultMountingOptions, overrides))
// }

// describe('Login.vue', () => {
//   localVue.use(Vuelidate); 
//   it("Renders with null prop", () => {
//     const cmp = mount(Login); 
//     // expect(cmp.name()).toMatch('Login')
//     expect(cmp.exists()).toBe(false)
//   })


describe("Login.vue", () => {
  // Check if login exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Login, {
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it('After the user submit button, $v.$invalid return true?', () => {
    const componentWrapper = mount(Login, {
    });

    const loginBtn = componentWrapper.find('#loginButtonTest')
    loginBtn.trigger('click')
    expect(wp.vm.$v.form.$invalid).toBeTruthy()
  })

  it("test emit with data", async () => {
    const componentWrapper = mount(Login, {
    });

    const testEmail = "loginEmail@address.com";
    const testPassword = "loginPassword";

    componentWrapper.vm.form.email = testEmail;
    componentWrapper.vm.form.password = testPassword;
    const loginButton = componentWrapper.find("#loginButtonTest");
    expect(loginButton.exists(), "loginButtonExists").toBe(true);
    loginButton.element.disabled = false;

    loginButton.trigger("click");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    let emittedPayload = emittedEvent.appAccountLogin[0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload.email).toEqual(testEmail);
    expect(emittedPayload.password).toEqual(testPassword);
  });
});

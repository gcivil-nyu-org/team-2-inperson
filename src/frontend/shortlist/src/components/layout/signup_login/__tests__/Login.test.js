import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

import { validatorSettings } from "../Login.vue";
describe("Login.vue", () => {
  it("renders null props", () => {
    const componentWrapper = mount(Login, {
      props: {},
    });
    expect(componentWrapper.exists()).toBe(true); 
  }); 


  it("test emit with data", async () => {
    const componentWrapper = mount(Login, {
      props: {},
    });

    const testEmail = "loginEmail@address.com";
    const testPassword = "loginPassword";

    componentWrapper.vm.form.email = testEmail;
    componentWrapper.vm.form.password = testPassword;

    const loginButton = componentWrapper.find("#loginButtonTest");
    expect(loginButton.exists(), "loginButtonExists").toBe(true);
    let emittedEvent = componentWrapper.emitted();
    console.log(emittedEvent); 
    expect(emittedEvent).toBeTruthy();
  });
});

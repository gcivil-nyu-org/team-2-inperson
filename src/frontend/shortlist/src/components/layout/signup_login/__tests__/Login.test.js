import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

import { validatorSettings } from "../Login.vue";
describe("Login.vue", () => {
  it("test emit with data", async () => {
    const componentWrapper = mount(Login, {
      props: {},
      validations: validatorSettings,
    });

    const testEmail = "loginEmail@address.com";
    const testPassword = "loginPassword";

    componentWrapper.vm.form.email = testEmail;
    componentWrapper.vm.form.password = testPassword;

    const loginButton = componentWrapper.find("#loginButtonTest");
    expect(loginButton.exists(), "loginButtonExists").toBe(true);
    componentWrapper.vm.v$.$touch();
    // loginButton.element.disabled = false;

    console.log(loginButton.element);

    loginButton.trigger("click");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    console.log(emittedEvent[0], "emittedEvent");
    // let emittedPayload = emittedEvent.appAccountLogin[0][0];
    // expect(emittedPayload).toBeTruthy();
    // expect(emittedPayload.email).toEqual(testEmail);
    // expect(emittedPayload.password).toEqual(testPassword);
  });
});

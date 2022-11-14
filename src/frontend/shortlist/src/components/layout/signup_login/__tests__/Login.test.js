import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

describe("Login.vue", () => {
  // Check if login exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Login, {});
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(Login, {});

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

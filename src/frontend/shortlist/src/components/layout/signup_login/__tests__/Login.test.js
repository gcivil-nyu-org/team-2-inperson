import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";

describe("Login.vue", () => {
  // Check if Login exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Login, {});
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test if emit works", async () => {
    const componentWrapper = mount(Login, {
      props: {},
    });
    componentWrapper.vm.submitLoginForm();
    /*
    console.log(componentWrapper.emitted(), "login emitted") ==>
    { appAccountLogin: [ [ [Object] ] ] } login emitted
    */
    expect(componentWrapper.emitted()).toBeTruthy();
  });

  it("test emit data", async () => {
    const componentWrapper = mount(Login, {
      props: {},
    });
    componentWrapper.vm.$emit("submitLoginForm");

    await componentWrapper.vm.$nextTick();
    expect(componentWrapper.emitted().submitLoginForm).toBeTruthy();
    expect(componentWrapper.emitted().submitLoginForm.length).toBe(1);
    expect(componentWrapper.emitted().submitLoginForm[0]).toEqual([]);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(Login, {
      props: {},
    });
    componentWrapper.vm.$emit("submitLoginForm");
    let clickableElement = componentWrapper.find("#submitLoginFormTest");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);

    const testEmail = "loginEmail@address.com";
    const testPassword = "loginPassword";

    componentWrapper.vm.form.email = testEmail;
    componentWrapper.vm.form.password = testPassword;

    clickableElement.trigger("click");
    expect(
      testEmail,
      "show intended data is just as expected after click"
    ).toBe("loginEmail@address.com");
    expect(componentWrapper.find("#submitLoginFormTest").element).exist;

    clickableElement.trigger("click");
    expect(
      testPassword,
      "show intended data is just as expected after click"
    ).toBe("loginPassword");
    expect(componentWrapper.find("#submitLoginFormTest").element).exist;
  });
});

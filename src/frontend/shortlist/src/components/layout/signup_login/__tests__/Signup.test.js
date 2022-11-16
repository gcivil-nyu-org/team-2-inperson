import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";

describe("Signup.vue", () => {
  // Check if Signup exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Signup, {});
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test if emit works", async () => {
    const componentWrapper = mount(Signup, {
      props: {},
    });
    componentWrapper.vm.submitSignupForm();
    /*
    console.log(componentWrapper.emitted()) ==>
    { appAccountSignup: [ [ [Object] ] ] }
    */
    expect(componentWrapper.emitted()).toBeTruthy();
  });

  it("test emit without data", async () => {
    const componentWrapper = mount(Signup, {
      props: {},
    });
    componentWrapper.vm.$emit("submitSignupForm");

    await componentWrapper.vm.$nextTick();
    expect(componentWrapper.emitted().submitSignupForm).toBeTruthy();
    expect(componentWrapper.emitted().submitSignupForm.length).toBe(1);
    expect(componentWrapper.emitted().submitSignupForm[0]).toEqual([]);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(Signup, {
      props: {},
    });
    componentWrapper.vm.$emit("submitSignupForm");
    let clickableElement = componentWrapper.find("#signupButtonTest");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);

    const testEmail = "signupEmail@address.com";
    const testFirstName = "signupFirstName";
    const testLastName = "signupLastName";
    const testPassword = "signupPassword";
    const testConfirmPassword = "signupConfirmedEmail@address.com";

    componentWrapper.vm.form.firstName = testFirstName;
    componentWrapper.vm.form.lastName = testLastName;
    componentWrapper.vm.form.email = testEmail;
    componentWrapper.vm.form.password = testPassword;
    componentWrapper.vm.form.confirmPassword = testConfirmPassword;

    clickableElement.trigger("click");
    expect(
      testEmail,
      "show intended data is just as expected after click"
    ).toBe("signupEmail@address.com");
    expect(componentWrapper.find("#signupButtonTest").element).exist;

    clickableElement.trigger("click");
    expect(
      testPassword,
      "show intended data is just as expected after click"
    ).toBe("signupPassword");
    expect(componentWrapper.find("#signupButtonTest").element).exist;

    clickableElement.trigger("click");
    expect(
      testFirstName,
      "show intended data is just as expected after click"
    ).toBe("signupFirstName");
    expect(componentWrapper.find("#signupButtonTest").element).exist;

    clickableElement.trigger("click");
    expect(
      testLastName,
      "show intended data is just as expected after click"
    ).toBe("signupLastName");
    expect(componentWrapper.find("#signupButtonTest").element).exist;

    clickableElement.trigger("click");
    expect(
      testConfirmPassword,
      "show intended data is just as expected after click"
    ).toBe("signupConfirmedEmail@address.com");
    expect(componentWrapper.find("#signupButtonTest").element).exist;
  });
});

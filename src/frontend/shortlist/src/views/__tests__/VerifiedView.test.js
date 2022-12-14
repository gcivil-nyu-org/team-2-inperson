import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import VerifiedView from "../VerifiedView.vue";

describe("VerifiedView.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(VerifiedView, {});
    // exists
    expect(componentWrapper.exists());
  });
  it("display based on verified=false status", () => {
    const componentWrapper = mount(VerifiedView, {
      data: function () {
        return {
          isVerified: false,
        };
      },
    });
    const inputEmail = componentWrapper.find("#emailaddress");
    expect(inputEmail.exists()).toBe(true);
  });
  it("display based on verified=true status", () => {
    const componentWrapper = mount(VerifiedView, {
      data: function () {
        return {
          isVerified: true,
        };
      },
    });
    const loginLink = componentWrapper.find("#loginLink");
    expect(loginLink.exists()).toBe(true);
  });
  it("display based on verified=true status", () => {
    const componentWrapper = mount(VerifiedView, {
      data: function () {
        return {
          isVerified: false,
        };
      },
    });
    const resendButton = componentWrapper.find("#resendButton");
    expect(resendButton.exists()).toBe(true);
    resendButton.trigger("click");
    expect(componentWrapper.vm.testPostSent).toBe(true);
  });
});

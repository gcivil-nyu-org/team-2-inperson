import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VerifiedView from "../VerifiedView.vue";

describe("VerifiedView.vue", () => {
  it("renders not verified page properly", () => {
    const mockRouter = {
      push: {
        path: "/verification",
        query: {
          verified: "false",
          message: "invalid token",
          email: "xx@gmail.com",
        },
      },
    };
    const componentWrapper = mount(VerifiedView, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });
    expect(componentWrapper.exists()).toBe(true);
    //makes sure only one template is showing
    expect(componentWrapper.vm.testNotVerified).toBe(true);
    expect(componentWrapper.vm.testVerified).toBe(false);
  });

  it("renders verified page correctly", () => {
    const mockRouter = {
      path: "/verification",
      push: {
        query: {
          verified: "true",
          message: "",
          email: "xx@gmail.com",
        },
      },
    };
    const componentWrapper = mount(VerifiedView, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });
    const loginLink = componentWrapper.find("#loginLink");
    expect(loginLink.exists()).toBe(true);
    expect(componentWrapper.vm.testVerified).toBe(true);
    expect(componentWrapper.vm.testNotVerified).toBe(false);
  });

  it("reset button send right info", async () => {
    const mockRouter = {
      path: "/verification",
      push: {
        query: {
          verified: "true",
          message: "",
          email: "xx@gmail.com",
        },
      },
    };
    const componentWrapper = mount(VerifiedView, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });
    const resetButton = componentWrapper.find("#resetButton");
    expect(resetButton.exists()).toBe(true);
    await resetButton.trigger("click");
    expect(componentWrapper.vm.testPostSent).toBe(true);
  });
});

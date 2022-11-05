import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";
import Login from "../Login.vue";
import Logo from "../Logo.vue";
// import axios from "axios";
import { createTestingPinia } from "@pinia/testing";

describe("Login.vue", () => {
  // Check if login exists
  it("Check Get", () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("Check if the login_components_container exists", async () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const login_components_container = componentWrapper.find(
      ".login_components_container"
    );
    expect(login_components_container.exists()).toBe(true);
  });

  it("Check if the loginForm works", async () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const loginForm = componentWrapper.find("#loginForm");
    expect(loginForm.exists()).toBe(true);
    await loginForm.trigger("submit.prevent");
  });

  it("Check if the switchToSignupButton works", async () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const switchToSignupButton = componentWrapper.find("#switchToSignupButton");
    expect(switchToSignupButton.exists()).toBe(true);
    await switchToSignupButton.trigger("click");
  });

  it("Check if the small titles work", async () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const smallTitles = componentWrapper.find("#small");
    expect(smallTitles.exists()).toBe(true);
  });
});

describe("Signup.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

  // The following are the component tests, all passing
  it("Check if the signup_components_container exists", async () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const signup_components_container = componentWrapper.find(
      ".signup_components_container"
    );
    expect(signup_components_container.exists()).toBe(true);
  });

  it("Check if the signupForm works", async () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const signupForm = componentWrapper.find("#signupForm");
    expect(signupForm.exists()).toBe(true);
    await signupForm.trigger("submit.prevent");
  });

  it("Check if the switchToLoginButton works", async () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const switchToLoginButton = componentWrapper.find("#switchToLoginButton");
    expect(switchToLoginButton.exists()).toBe(true);
    await switchToLoginButton.trigger("click");
  });

  it("Check if the big titles work", async () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const bigTitles = componentWrapper.find("#big");
    expect(bigTitles.exists()).toBe(true);
  });
});

describe("Logo.vue", () => {
  it("Check if Logo exists", () => {
    const componentWrapper = mount(Logo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("Check if the logoToHome works", async () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const logoToHome = componentWrapper.find("#logoToHome");
    expect(logoToHome.exists()).toBe(true);
  });
});

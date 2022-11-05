import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";
import Login from "../Login.vue";
import Logo from "../Logo.vue"; 
import axios from "axios";
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

  it("Check Axios Get", () => {
    const componentWrapper = mount(Login, {});
    // Assume signupInfo will appear here
    let signUpInfo;
    axios.get(
      "https://1rct87m2md.execute-api.us-east-1.amazonaws.com/api/account/update"
    );
    expect(signUpInfo.password_login.exists()).toBe(true);
    expect(signUpInfo.email_login.exists()).toBe(true);
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

  it("Check Axios Post", () => {
    const componentWrapper = mount(Login, {});
    // Assume signupInfo will appear here
    let signUpInfo;
    axios.post(
      "https://1rct87m2md.execute-api.us-east-1.amazonaws.com/api/account/update",
      {
        "x-shortlist-account": "Fred",
        "x-shortlist-session": "null",
        "x-shortlist-token": "null",
      }
    );
    expect(signUpInfo.password_signup.exists()).toBe(true);
    expect(signUpInfo.email_signup.exists()).toBe(true);
  });

  it("Check Axios Get", () => {
    const componentWrapper = mount(Login, {});
    // Assume signupInfo will appear here
    // let account_id;
    let signupInfo;
    axios.get(
      "https://1rct87m2md.execute-api.us-east-1.amazonaws.com/api/account/update",
      {
        // Ideally, account_id should not be in quotes, but is giving error message for now.
        "x-shortlist-account": "account_id",
        "x-shortlist-session": "null",
        "x-shortlist-token": "null",
      }
    );
    expect(signUpInfo.password_signup.exists()).toBe(true);
    expect(signUpInfo.email_signup.exists()).toBe(true);
  });

  it("check if user exists", () => {
    const componentWrapper = mount(Signup, {});
    let email_signup = componentWrapper.vm.email_signup;
    let password_signup = componentWrapper.vm.password_signup;
    let newUser = "newUser@gmail.com";
    let newPassword = "new password";
    componentWrapper.vm.email_signup = "newUser@gmail.com";
    componentWrapper.vm.password_signup = "new password";
    expect(email_signup).toBe(newUser);
    expect(password_signup).toBe(newPassword);
  });

  // This gives error message but written during Ye's demo
  // it("check if user exists", () => {
  //   const componentWrapper = mount(Signup, {
  //   });
  //   let newUser = "newUser@gmail.com";
  //   let newPassword = "new password";
  //   componentWrapper.vm.email_signup = "newUser@gmail.com";
  //   componentWrapper.vm.password_signup = "new password";
  //   expect(signUpInfo.email_signup).toBe(newUser);
  //   expect(signUpInfo.password_signup).toBe(newPassword);
  // });

  it("Check if the switchToLoginButton works", async () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const switchToLoginButton = componentWrapper.find("#switchToSignupButton");
    expect(switchToLoginButton.exists()).toBe(true);
    await switchToLoginButton.trigger("click");
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

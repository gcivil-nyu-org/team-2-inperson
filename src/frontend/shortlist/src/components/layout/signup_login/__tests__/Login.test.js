/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Login from "../Login.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Login.vue", () => {
  // Check if login exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async() => {
    const componentWrapper = mount(Login, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
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
  })

}); 
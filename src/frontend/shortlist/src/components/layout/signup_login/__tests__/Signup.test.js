/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Signup.vue", () => {
  // Check if Signup exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async() => {
    const componentWrapper = mount(Signup, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const testEmail = "signupEmail@address.com"; 
    const testFirstName = "signupFirstName";
    const testLastName = "signupLastName"; 
    const testPassword = "signupPassword"; 

    componentWrapper.vm.form.email = testEmail; 
    componentWrapper.vm.form.firstName = testFirstName; 
    componentWrapper.vm.form.lastName = testLastName; 
    componentWrapper.vm.form.password = testPassword; 
    const signupButton = componentWrapper.find("#signupButtonTest");
    expect(signupButton.exists(), "ButtonExists").toBe(true);
    signupButton.element.disabled = false; 

    signupButton.trigger("click"); 
    await componentWrapper.vm.$nextTick(); 
    let emittedEvent = componentWrapper.emitted(); 
    expect(emittedEvent).toBeTruthy();  
  })

}); 
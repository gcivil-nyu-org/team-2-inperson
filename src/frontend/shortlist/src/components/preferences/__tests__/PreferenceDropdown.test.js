/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceDropdown from "../PreferenceDropdown.vue";
import { createTestingPinia } from "@pinia/testing";

describe("PreferenceDropdown.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        question: "string",
        modelValue: "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });



  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        question: "string",
        modelValue: "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const testModelValue = "ModelValue";

    componentWrapper.vm.value = testModelValue;
    const testItem = componentWrapper
      .find(".btn-btn-success-dropdown-toggle");
    expect(testItem.exists(), "question.Name").toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    let emittedPayload = emittedEvent.updateModelValue[0][0];
    // console.log(emittedEvent, "emittedEvent"); 
    // console.log(emittedPayload, "emittedPayload"); 
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

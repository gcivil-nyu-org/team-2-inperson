/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceTypeText from "../PreferenceTypeText.vue";
import { createTestingPinia } from "@pinia/testing";

describe("PreferenceTypeText.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        question: "String",
        modelValue: "String",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        question: "String",
        modelValue: "String",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;
    const testItem = componentWrapper.find(".pref-input-text");
    expect(testItem.exists(), "testItemExists").toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    console.log(emittedEvent, "emittedEvent");
    expect(emittedEvent).toBeTruthy();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    console.log(emittedPayload, "emittedPayload");
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

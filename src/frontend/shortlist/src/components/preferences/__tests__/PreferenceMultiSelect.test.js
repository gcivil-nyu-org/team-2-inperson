/*
TODO(All these vue files do not have props that correspond to the API, needs to be added)
The following tests conclude all major component testing.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceMultiSelect from "../PreferenceMultiSelect.vue";
import { createTestingPinia } from "@pinia/testing";

describe("PreferenceMultiSelect.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
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
    const componentWrapper = mount(PreferenceMultiSelect, {
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
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent).toBeTruthy();
    let emittedPayload = emittedEvent.updateModelValue[0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceDropdown from "../PreferenceDropdown.vue";

describe("PreferenceDropdown.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        "question": "string",
        "modelValue": "value", 
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        "question": "string",
        "modelValue": "value", 
      },
    });

    const testModelValue = "ModelValue";

    componentWrapper.vm.value = testModelValue;
    // const testItem = componentWrapper.find(".btn btn-success dropdown-toggle");
    // expect(testItem.exists()).toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

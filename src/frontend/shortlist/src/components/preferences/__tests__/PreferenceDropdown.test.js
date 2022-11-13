import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceDropdown from "../PreferenceDropdown.vue";

describe("PreferenceDropdown.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        question: "",
        modelValue: [[""]],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        question: "",
        modelValue: [[""]],
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;
    const dropDownToggle = componentWrapper.find("select");
    expect(dropDownToggle.exists()).toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

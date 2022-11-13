import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceMultiSelect from "../PreferenceMultiSelect.vue";

describe("PreferenceMultiSelect.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        question: "",
        modelValue: ["sample1", "sample2"],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        question: "",
        modelValue: ["sample1", "sample2"],
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent).toBeTruthy();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

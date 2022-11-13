import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceOneSelect from "../PreferenceOneSelect.vue";

describe("PreferenceOneSelect.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        question: "",
        modelValue: [""],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        question: "",
        modelValue: [""],
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

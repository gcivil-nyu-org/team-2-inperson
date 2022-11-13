import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceTypeText from "../PreferenceTypeText.vue";

describe("PreferenceTypeText.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        question: "",
        modelValue: "",
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        question: "",
        modelValue: "",
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;
    const testItem = componentWrapper.find(".pref-input-text");
    expect(testItem.exists(), "testItemExists").toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent).toBeTruthy();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

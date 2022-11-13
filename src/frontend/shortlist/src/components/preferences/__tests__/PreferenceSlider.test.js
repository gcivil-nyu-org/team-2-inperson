import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceSlider from "../PreferenceSlider.vue";

describe("PreferenceSlider.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceSlider, {
      props: {
        question: "",
        modelValue: [Number],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceSlider, {
      props: {
        question: "",
        modelValue: [Number],
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;
    const testItem = componentWrapper.find(".slider");
    expect(testItem.exists(), "testItemExists").toBe(true);

    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent).toBeTruthy();
    let emittedPayload = emittedEvent["update:modelValue"][0][0];
    expect(emittedPayload).toBeTruthy();
    expect(emittedPayload).toBe(testModelValue);
  });
});

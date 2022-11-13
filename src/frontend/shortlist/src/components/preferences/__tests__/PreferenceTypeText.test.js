import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceTypeText from "../PreferenceTypeText.vue";

describe("PreferenceTypeText.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        question: "String",
        modelValue: "String",
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceTypeText, {
      props: {
        question: "String",
        modelValue: "String",
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

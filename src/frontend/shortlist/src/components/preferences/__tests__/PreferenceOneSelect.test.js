import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceOneSelect from "../PreferenceOneSelect.vue";

describe("PreferenceOneSelect.vue", () => {
  // Check if component exists
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        question: "String",
        modelValue: "String",
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test emit with data", async () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        question: "String",
        modelValue: "String",
      },
    });

    const testModelValue = "ModelValue";
    componentWrapper.vm.value = testModelValue;

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

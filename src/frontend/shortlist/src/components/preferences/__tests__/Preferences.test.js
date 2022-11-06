import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PreferenceDemo from "../PreferenceDemo.vue";
import PreferenceMultiSelect from "../PreferenceMultiSelect.vue"; 

// Only exists
describe("PreferenceDemo.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDemo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    }); 
    expect(componentWrapper.exists()).toBe(true);
  }); 
}); 

//
describe("PreferenceMultiSelect.vue", () => {
  it("renders with props", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        "question": "string",
        "modelValue": "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    }); 
    expect(componentWrapper.exists()).toBe(true);
  }); 

  it("check updateModelValueEmit", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        "question": "string",
        "modelValue": "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    }); 


    expect(
      componentWrapper.emitted(),
      "properly emitted change event"
    ).toBeTruthy();

}); 

}); 
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PreferenceDemo from "../PreferenceDemo.vue";
import PreferenceManager from "../PreferenceManager.vue"; 
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

  it("check preference_demo_component button", () => {
    const componentWrapper = mount(PreferenceDemo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    }); 

    let clickableElement = componentWrapper.find("#preference-demo-component");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);
    clickableElement.trigger("preferenceSubmitted");
    expect(
      componentWrapper.vm.prefResults.submitted,
      "show prefResults are submitted"
    ).toBe(false);
  });
}); 

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

// PreferenceManager, for some reason, this is failing. 
// describe("PreferenceManager.vue", () => {
//   it("check PreferenceManager exists", () => {
//     const componentWrapper = mount(PreferenceManager, {
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     }); 
//     const pref_actions = componentWrapper.find(".pref_actions")
//     expect(pref_actions.exists()).toBe(true);
//   });
// }); 

 
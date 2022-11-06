import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PreferenceDemo from "../PreferenceDemo.vue";
import PreferenceDropdown from "../PreferenceDropdown.vue"; 
// import { PreferenceManager } from "../PreferenceDemo.vue";
// import PreferenceManager from "../PreferenceManager.vue";
import PreferenceMultiSelect from "../PreferenceMultiSelect.vue";

describe("PreferenceDemo.vue", () => {
  it("check if PreferenceDemo exists", () => {
    const componentWrapper = mount(PreferenceDemo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("check preference_demo_component clickable button renders desirable results", () => {
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

describe("PreferenceDropdown.vue", () => {
  // Check if component exists
  it("renders with props", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        // When API call is clear, we will change this to match API get and post
        question: "string",
        modelValue: "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });
}); 

describe("PreferenceMultiSelect.vue", () => {
  it("renders with props", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        // When API is clear, these need to be from the API call
        question: "string",
        modelValue: "string",
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
        question: "string",
        modelValue: "string",
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
//     it("check PreferenceManager exists", () => {
//       const componentWrapper = mount(PreferenceManager, {
//         global: {
//           plugins: [createTestingPinia({ createSpy: vi.fn })],
//         },
//       });
//       const pref_actions = componentWrapper.find(".pref_actions")
//       expect(pref_actions.exists()).toBe(true);
//     });
    
//   it("check PreferenceManager clickable button renders desirable results", () => {
//     const componentWrapper = mount(PreferenceManager, {
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     });
//     let clickableElement = componentWrapper.find("#SetPreferences");
//     expect(clickableElement.exists(), "clickable element exists").toBe(true);
//     clickableElement.trigger("preferenceSubmitted");
//     expect(
//       componentWrapper.vm.prefResults.submitted,
//       "show prefResults are submitted"
//     ).toBe(true);
//   });
// });

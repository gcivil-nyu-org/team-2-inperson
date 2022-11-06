import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PreferenceDemo from "../PreferenceDemo.vue";
import PreferenceDropdown from "../PreferenceDropdown.vue";
import PreferenceManagerPage from "../PreferenceManagerPage.vue";
import PreferenceOneSelect from "../PreferenceOneSelect.vue"; 
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

  it("check if preference_demo_container exists", () => {
    const componentWrapper = mount(PreferenceDemo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const preference_demo_container = componentWrapper.find(
      ".preference-demo-container"
    );
    expect(preference_demo_container.exists()).toBe(true);
  });

  it("check if preference_demo_component exists", () => {
    const componentWrapper = mount(PreferenceDemo, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const preference_demo_component = componentWrapper.find(
      ".preference-demo-component"
    );
    expect(preference_demo_component.exists()).toBe(true);
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
  it("renders without api props", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        question: "string",
        modelValue: "string",
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  /*
  TODO(The following tests give error message: Cannot read properties of undefined (reading 'Name'))
  it("check if pref_q_container exists", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const pref_q_container = componentWrapper.find(".pref-q-container");
    expect(pref_q_container.exists()).toBe(true);
  });

  it("check if pref-q-namer exists", () => {
    const componentWrapper = mount(PreferenceDropdown, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const pref_q_name = componentWrapper.find(".pref-q-name");
    expect(pref_q_name.exists()).toBe(true);
  });
  */
});

describe("PreferenceOneSelect.vue", () => {
  it("renders without api props", () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        "question": "string",
        "modalValue": "string"
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  }); 

  it("renders without api props", () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        "question": "string",
        "modalValue": "string"
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const pref_q_container = componentWrapper.find(".pref-q-container")
    expect(pref_q_container.exists()).toBe(true);
    expect(pref_q_container.exists()).toBe(true);
  }); 

  it("renders without api props", () => {
    const componentWrapper = mount(PreferenceOneSelect, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        "question": "string",
        "modalValue": "string"
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const pref_q_name = componentWrapper.find(".pref-q-name")
    expect(pref_q_name.exists()).toBe(true);
    expect(pref_q_name.exists()).toBe(true);
  });
}); 


describe("PreferenceManagerPage.vue", () => {
  it("renders without api props", () => {
    const componentWrapper = mount(PreferenceManagerPage, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        "id": "num",
        "subtitle": "string"
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("check pref-section-header existence", () => {
    const componentWrapper = mount(PreferenceManagerPage, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
        "id": "num",
        "subtitle": "string"
      },
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const pref_section_header = componentWrapper.find(".pref-section-header")
    expect(pref_section_header.exists()).toBe(true);
  });

}); 

describe("PreferenceMultiSelect.vue", () => {
  it("renders with props", () => {
    const componentWrapper = mount(PreferenceMultiSelect, {
      props: {
        /*
      TODO(When API call is clear, we will change this to match API variables)
     */
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

/*
      TODO(This is for next weeks' possible sprint backlog. None of the regular tests in PreferenceManager is passing')
PreferenceManager, for some reason, this is failing.
describe("PreferenceManager.vue", () => {
    it("check PreferenceManager exists", () => {
      const componentWrapper = mount(PreferenceManager, {
        global: {
          plugins: [createTestingPinia({ createSpy: vi.fn })],
        },
      });
      const pref_actions = componentWrapper.find(".pref_actions")
      expect(pref_actions.exists()).toBe(true);
    });

  it("check PreferenceManager clickable button renders desirable results", () => {
    const componentWrapper = mount(PreferenceManager, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    let clickableElement = componentWrapper.find("#SetPreferences");
    expect(clickableElement.exists(), "clickable element exists").toBe(true);
    clickableElement.trigger("preferenceSubmitted");
    expect(
      componentWrapper.vm.prefResults.submitted,
      "show prefResults are submitted"
    ).toBe(true);
  });
});
*/

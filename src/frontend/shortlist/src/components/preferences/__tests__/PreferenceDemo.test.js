import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import PreferenceDemo from "../PreferenceDemo.vue";

describe("PreferenceDemo.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDemo, {
      props: {}, 
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });
});

import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PreferenceDemo from "../PreferenceDemo.vue";

describe("PreferenceDemo.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(PreferenceDemo, {
      props: {},
    });
    expect(componentWrapper.exists()).toBe(true);
  });
});

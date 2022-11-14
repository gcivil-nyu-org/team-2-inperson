import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LoggedOut from "../LoggedOut.vue";

describe("LoggedOut.vue", () => {
  // Check if LoggedOut exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(LoggedOut, {
    });
    expect(componentWrapper.exists()).toBe(true);
  });
});

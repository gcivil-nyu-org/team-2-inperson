/*
This test file only tests if LoggedOut exists, as it does not have any emit function.
*/
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LoggedOut from "../LoggedOut.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Login.vue", () => {
  // Check if login exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(LoggedOut, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    expect(componentWrapper.exists()).toBe(true);
  });

}); 
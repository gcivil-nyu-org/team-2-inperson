import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";

describe("Signup.vue", () => {
  // Check if Signup exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Signup, {
    });
    expect(componentWrapper.exists()).toBe(true);
  });

}); 
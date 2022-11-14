import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import VerifiedView from "../VerifiedView.vue";

describe("ShortlistRow.vue", () => {
  it("renders not verified page properly", () => {
    const componentWrapper = mount(VerifiedView, {});
    expect(componentWrapper.exists()).toBe(true);
    expect(componentWrapper.vm.testNotVerified).toBe(true);
  });
  it("renders verified page correctly", () => {
    const componentWrapper = mount(VerifiedView, {});
    const loginLink = componentWrapper.find("#loginLink");
    expect(loginLink.exists()).toBe(true);
    componentWrapper.vm.isVerified = true;
    expect(componentWrapper.vm.testVerified).toBe(true);
  });
});

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserRelations from "../UserRelations.vue";

describe("UserRelations.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(UserRelations, {});
    // exists
    expect(componentWrapper.exists());
  });
  it("validate email fine", () => {
    const componentWrapper = mount(UserRelations, {});
    componentWrapper.vm.newEmail = "as@abc.com";
    componentWrapper.vm.validateEmail();
    expect(componentWrapper.vm.validationresult).toBe(true);
  });
  it("sends email fine", async () => {
    const componentWrapper = mount(UserRelations, {});
    const inviteButton = componentWrapper.find("#send-invite-button");
    expect(inviteButton.exists()).toBe(true);
    componentWrapper.vm.newEmail = "ab@abc.com";
    inviteButton.trigger("click");
    expect(componentWrapper.vm.inviteSented).toBe(true);
  });
});

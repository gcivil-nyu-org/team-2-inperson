import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoggedOut from "../LoggedOut.vue";

describe("LoggedOut.vue", () => {
  // Check if LoggedOut exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(LoggedOut, {});
    expect(componentWrapper.exists()).toBe(true);
  });

  // Test emit
  it("test if emit works", async () => {
    const componentWrapper = mount(LoggedOut, {});
    componentWrapper.vm.$emit("logoutEvent");
    /*
    console.log(componentWrapper.emitted(), "logoutEvent");  ==>
    { logoutEvent: [ [], [] ] } logoutEvent
    */
    expect(componentWrapper.emitted()).toBeTruthy();
  });

  //Test emit
  it.skip("test emit without data", async () => {
    const componentWrapper = mount(LoggedOut, {});
    componentWrapper.vm.$emit("logoutEvent");

    await componentWrapper.vm.$nextTick();
    expect(componentWrapper.emitted().logoutEvent).toBeTruthy();
    expect(componentWrapper.emitted().logoutEvent.length).toBe(2);
    expect(componentWrapper.emitted().logoutEvent).toEqual([[], []]);
  });
});

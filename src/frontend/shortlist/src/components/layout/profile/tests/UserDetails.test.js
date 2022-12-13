import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserDetails from "../UserDetails.vue";

describe("UserDetails.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(UserDetails, {
      props: {},
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test if emit works", async () => {
    const componentWrapper = mount(UserDetails, {
      props: {},
    });
    /*
    console.log(componentWrapper.emitted(), "UserDetails emitted") ==>
    { appAccountUpdateName: [ [] ] } UserDetails emitted
    */
    componentWrapper.vm.$emit("appAccountUpdateName");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent.appAccountUpdateName).toBeTruthy();
  });

  it("test emitted function", async () => {
    const componentWrapper = mount(UserDetails, {
      props: {},
    });
    expect(componentWrapper.vm.validation).toBe(true);
    componentWrapper.vm.$emit("appAccountUpdateName");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent.appAccountUpdateName.length).toBe(1);
    expect(emittedEvent.appAccountUpdateName[0]).toEqual([]);
  });
});

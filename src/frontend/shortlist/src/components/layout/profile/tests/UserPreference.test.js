import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UserPreference from "../UserPreference.vue";

describe("UserPreference.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(UserPreference, {
      // props: {},
    });
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test if emit works", async () => {
    const componentWrapper = mount(UserPreference, {
      props: {},
    });
    /*
    console.log(componentWrapper.emitted(), "UserPreference emitted") ==>
    { appAccountUpdatePreferences: [ [] ] } UserPreference emitted
    */
    componentWrapper.vm.$emit("appAccountUpdatePreferences");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent.appAccountUpdatePreferences).toBeTruthy();
  });

  it("test emitted function", async () => {
    const componentWrapper = mount(UserPreference, {
      props: {},
    });
    expect(componentWrapper.vm.preferenceUpdateFlag).toBe(false);
    componentWrapper.vm.$emit("appAccountUpdatePreferences");
    await componentWrapper.vm.$nextTick();
    let emittedEvent = componentWrapper.emitted();
    expect(emittedEvent.appAccountUpdatePreferences.length).toBe(1);
    expect(emittedEvent.appAccountUpdatePreferences[0]).toEqual([]);
  });
});

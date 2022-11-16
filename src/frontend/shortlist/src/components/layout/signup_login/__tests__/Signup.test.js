import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Signup from "../Signup.vue";

describe("Signup.vue", () => {
  // Check if Signup exists
  it("Renders with null prop", () => {
    const componentWrapper = mount(Signup, {});
    expect(componentWrapper.exists()).toBe(true);
  });

  it("test if emit works", async () => {
    const componentWrapper = mount(Signup, {
      props: {},
    });
    componentWrapper.vm.submitSignupForm();
    /*
    console.log(componentWrapper.emitted()) ==>
    { appAccountSignup: [ [ [Object] ] ] }
    */
    // console.log(componentWrapper.emitted()[0], "test"); 
    expect(componentWrapper.emitted()).toBeTruthy(); 
  });

  it("test emit data", async () => {
    const componentWrapper = mount(Signup, {
      props: {},
    });
    componentWrapper.vm.$emit("submitSignupForm");

    await componentWrapper.vm.$nextTick(); 
    expect(componentWrapper.emitted().submitSignupForm).toBeTruthy()
    expect(componentWrapper.emitted().submitSignupForm.length).toBe(1)
    expect(componentWrapper.emitted().submitSignupForm[0]).toEqual([])
  });
});

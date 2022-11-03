import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Signup from "../Signup.vue";
// import { shortLists } from "../../../../api/examples/shortlists";

describe("Signup.vue", () => {
  it("renders with null props", () => {
    const componentWrapper = mount(Signup, {
      // props: {},
      // global: {
      //   plugins: [createTestingPinia({ createSpy: vi.fn })],
      // },
    });

    // exists
    expect(componentWrapper.exists()).toBe(true);
  });

//   it("renders with well-formed props", () => {
//     const componentWrapper = mount(ShortlistRow, {
//       props: {
//         listId: 0,
//         listSettings: shortLists[0].settings,
//         listSchools: shortLists[0].schools,
//       },
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     });

//     // exists
//     expect(componentWrapper.exists()).toBe(true);
//   });

//   it("enter edit mode with button clicked", async () => {
//     const componentWrapper = mount(ShortlistRow, {
//       props: {
//         listId: 0,
//         listSettings: shortLists[0].settings,
//         listSchools: shortLists[0].schools,
//       },
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     });

//     expect(componentWrapper.vm.inEditMode, "not in edit mode").toBe(false);
//     const editButton = componentWrapper.find("#editButton");
//     expect(editButton.exists()).toBe(true);
//     await editButton.trigger("click");
//     expect(componentWrapper.vm.inEditMode, "show edit mode").toBe(true);
//   });

//   it("cancel changes with cancel button clicked", async () => {
//     const componentWrapper = mount(ShortlistRow, {
//       props: {
//         listId: 0,
//         listSettings: shortLists[0].settings,
//         listSchools: shortLists[0].schools,
//       },
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     });

//     let originalName = componentWrapper.vm.localSettings.name;
//     let originalColor = componentWrapper.vm.localSettings.color;
//     let originalIcon = componentWrapper.vm.localSettings.icon;

//     //directly change setting without button click
//     componentWrapper.vm.localSettings.name = "new name";
//     componentWrapper.vm.localSettings.color = "#000000";
//     componentWrapper.vm.localSettings.icon = {
//       value: "science",
//       color: "blue",
//     };

//     expect(componentWrapper.vm.inEditMode, "not in edit mode").toBe(false);
//     const editButton = componentWrapper.find("#editButton");
//     expect(editButton.exists()).toBe(true);
//     await editButton.trigger("click");

//     const cancelButton = componentWrapper.find("#cancelButton");
//     expect(cancelButton.exists()).toBe(true);
//     await cancelButton.trigger("click");

//     expect(
//       componentWrapper.vm.localSettings.name,
//       "revert name back to original"
//     ).toBe(originalName);

//     expect(
//       componentWrapper.vm.localSettings.color,
//       "revert color back to original"
//     ).toBe(originalColor);

//     expect(
//       componentWrapper.vm.localSettings.icon,
//       "revert icon back to original"
//     ).toStrictEqual(originalIcon);
//   });

//   it("emit changes with change button clicked", async () => {
//     const componentWrapper = mount(ShortlistRow, {
//       props: {
//         listId: 0,
//         listSettings: shortLists[0].settings,
//         listSchools: shortLists[0].schools,
//       },
//       global: {
//         plugins: [createTestingPinia({ createSpy: vi.fn })],
//       },
//     });

//     expect(componentWrapper.vm.inEditMode, "not in edit mode before edit").toBe(
//       false
//     );
//     const editButton = componentWrapper.find("#editButton");
//     expect(editButton.exists()).toBe(true);
//     await editButton.trigger("click");

//     let newName = "new name";
//     let newColor = "#fadadd";
//     let newIcon = { value: "sicence", color: "black" };

//     componentWrapper.vm.localSettings.name = newName;
//     componentWrapper.vm.localSettings.color = newColor;
//     componentWrapper.vm.localSettings.icon = newIcon;

//     const changeButton = componentWrapper.find("#changeButton");
//     expect(changeButton.exists()).toBe(true);
//     await changeButton.trigger("click");
//     expect(
//       componentWrapper.vm.inEditMode,
//       "not in edit mode after change"
//     ).toBe(false);

//     await componentWrapper.vm.$nextTick();
//     expect(
//       componentWrapper.emitted().changeListSettings,
//       "properly emitted change event"
//     ).toBeTruthy();
//     expect(
//       componentWrapper.emitted().changeListSettings[0],
//       "emitted correct values"
//     ).toEqual([
//       {
//         name: newName,
//         color: newColor,
//         icon: newIcon,
//       },
//     ]);
//   });
});
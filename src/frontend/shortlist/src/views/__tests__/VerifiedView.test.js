import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import VerifiedView from "../VerifiedView.vue";

describe("VerifiedView.vue", () => {
    it("renders with null props", () => {
      /*
        TODO(Set the component to properly render "placeholder" 
        shapes so that it maintains its overall shape)
       */
        const $route = {
            fullPath: '/verification?token_valid=True'
        }
      const componentWrapper = mount(VerifiedView, {
        mocks: {
            $route
        }
      });
      componentWrapper.vm.$route.fullPath
      // exists
      expect(componentWrapper.exists());
    });
  });
  
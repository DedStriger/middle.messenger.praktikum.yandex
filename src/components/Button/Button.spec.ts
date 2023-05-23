import { assert, expect } from "chai";
import Button from "./Button";
import { checkTestProps } from "../../../utils/checkTestProps";

const testProps = {
    id: 'test',
    text: 'test',
  }
  
  describe("Button", () => {
    it("should return right template", () => {
      const back = new Button(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new Button(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 

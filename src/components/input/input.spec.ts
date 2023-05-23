import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import input from "./input";
const testProps = {
    id: 'test',
    name: 'test',
    label: 'test',
    validation: 'empty'
  }
  
  describe("input", () => {
    it("should return right template", () => {
      const back = new input(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new input(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


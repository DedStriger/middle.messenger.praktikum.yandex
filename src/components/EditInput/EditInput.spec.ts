import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import EditInput from "./EditInput";

const testProps = {
    id: 'test',
    name: 'test',
    label: 'test',
    validation: 'empty'
  }
  
  describe("EditInput", () => {
    it("should return right template", () => {
      const back = new EditInput(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new EditInput(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


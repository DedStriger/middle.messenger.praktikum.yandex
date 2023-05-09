import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import Search from "./Search";
const testProps = {
  }
  
  describe("Search", () => {
    it("should return right template", () => {
      const back = new Search()
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new Search()
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


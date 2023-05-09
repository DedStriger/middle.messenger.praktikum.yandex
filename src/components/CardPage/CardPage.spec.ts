import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import CardPage from "./CardPage";

const testProps = {
    id: 'test',
    title: 'test',
    content: 'testContent'
  }
  
  describe("CardPage", () => {
    it("should return right template", () => {
      const back = new CardPage(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new CardPage(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import Message from "./Message";
const testProps = {
    id:'test',
    avatar: 'test',
    name: 'test',
    chatId:'test',
  }
  
  describe("Message", () => {
    it("should return right template", () => {
      const back = new Message(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new Message(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


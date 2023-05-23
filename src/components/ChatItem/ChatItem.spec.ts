import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import ChatItem from "./ChatItem";

const testProps = {
    id: 'test',
    name: 'test',
    lastMessage: 'test',
    wasOnline: 'test',
    unreadMessage: 12
  }
  
  describe("ChatItem", () => {
    it("should return right template", () => {
      const back = new ChatItem(testProps)
      expect(back.getFirstRender(), back.render())
    });
  
    it('Have right props', () => {
      const back = new ChatItem(testProps)
      assert.equal(checkTestProps(testProps, back.props), true)
    })
  }); 


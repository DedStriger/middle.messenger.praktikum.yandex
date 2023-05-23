import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import Avatar from "./Avatar";


const testProps = {
  id: 'test',
  src: 'testSrc'
}

describe("Avatar", () => {
  it("should return right template", () => {
    const avatar = new Avatar(testProps)
    expect(avatar.getFirstRender(), avatar.render())
  });

  it('Have right props', () => {
    const avatar = new Avatar(testProps)
    assert.equal(checkTestProps(testProps, avatar.props), true)
  })
}); 

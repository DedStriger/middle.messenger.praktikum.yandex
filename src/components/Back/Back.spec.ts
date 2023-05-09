import { assert, expect } from "chai";
import { checkTestProps } from "../../../utils/checkTestProps";
import Back from "./Back";

const testProps = {
  id: 'test',
}

describe("Back", () => {
  it("should return right template", () => {
    const back = new Back(testProps)
    expect(back.getFirstRender(), back.render())
  });

  it('Have right props', () => {
    const back = new Back(testProps)
    assert.equal(checkTestProps(testProps, back.props), true)
  })
}); 


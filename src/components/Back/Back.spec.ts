import { assert, expect } from "chai";
const {default: Back} = require('./Back.ts')
import { checkTestProps } from "../../../utils/checkTestProps";

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


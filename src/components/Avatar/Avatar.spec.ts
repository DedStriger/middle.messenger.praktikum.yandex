import { expect } from "chai";
import Avatar from "./Avatar.tmp";

describe("Typescript + Babel usage suite", () => {
  it("should return string correctly", () => {
    expect(Avatar, `
    <img src='{{#if src }}{{src}}{{else}}data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII={{/if}}' class='avatar' />
`);
  });
}); 

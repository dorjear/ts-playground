import {duplicateCount, duplicateCount2} from "./DuplicateCount";

describe("descendingOrder", function() {
  it("should return some sample numbers in descending order", function() {
    // assert.strictEqual(descendingOrder(0), 0);
    // assert.strictEqual(descendingOrder(1), 1);
    // assert.strictEqual(descendingOrder(123456789), 987654321);
    expect(duplicateCount("abcde")).toBe(0)
    expect(duplicateCount("aabBcde")).toBe(2)
    expect(duplicateCount("aabbcde")).toBe(2)
    expect(duplicateCount("indivisibility")).toBe(1)
    expect(duplicateCount("Indivisibilities")).toBe(2)
    expect(duplicateCount("aA11")).toBe(2)
    expect(duplicateCount("ABBA")).toBe(2)
    expect(duplicateCount2("abcde")).toBe(0)
    expect(duplicateCount2("aabBcde")).toBe(2)
    expect(duplicateCount2("aabbcde")).toBe(2)
    expect(duplicateCount2("indivisibility")).toBe(1)
    expect(duplicateCount2("Indivisibilities")).toBe(2)
    expect(duplicateCount2("aA11")).toBe(2)
    expect(duplicateCount2("ABBA")).toBe(2)
  });
});

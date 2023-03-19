import quicksand from "@/lib/quicksand";

describe("quicksand", () => {
  it("should provide ReactJS class name", () => {
    expect(typeof quicksand.className === "string").toBe(true);
  });
});

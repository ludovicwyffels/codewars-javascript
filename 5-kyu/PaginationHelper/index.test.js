const PaginationHelper = require('.');

describe('Solution', () => {
  it('should test for something', () => {
    const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
    expect(helper.pageCount()).toBe(2);
    expect(helper.itemCount()).toBe(6);
    expect(helper.pageItemCount(0)).toBe(4);
    expect(helper.pageItemCount(1)).toBe(2);
    expect(helper.pageItemCount(2)).toBe(-1);
    expect(helper.pageIndex(5)).toBe(1);
    expect(helper.pageIndex(2)).toBe(0);
    expect(helper.pageIndex(20)).toBe(-1);
    expect(helper.pageIndex(0)).toBe(0);
  });

  it('empty', () => {
    const helper = new PaginationHelper([], 4);
    expect(helper.pageCount()).toBe(0);
    expect(helper.itemCount()).toBe(0);
    expect(helper.pageItemCount(0)).toBe(-1);
    expect(helper.pageItemCount(1)).toBe(-1);
    expect(helper.pageIndex(5)).toBe(-1);
    expect(helper.pageIndex(2)).toBe(-1);
    expect(helper.pageIndex(20)).toBe(-1);
  });
});

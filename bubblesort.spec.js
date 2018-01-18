describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  // it('returns an Error if not array', function() {
  //   expect(bubbleSort('string')).toThrow(new TypeError('not Array'));
  // });

  it('orders an Array', function() {
    expect(bubbleSort([5, 8, 1, 14, 56, 2])).toEqual([1, 2, 5, 8, 14, 56]);
  });

  it('should swap 6 times', function() {
    bubbleSort([5, 8, 1, 14, 56, 2]);
    expect(window.swap.calls.count()).toEqual(6);
  });
  it('should compare 6 times', function() {
    bubbleSort([5, 8, 3]);
    expect(window.compare.calls.count()).toEqual(6);
  });
});

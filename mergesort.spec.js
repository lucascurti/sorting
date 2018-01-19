describe('Merge Sort', function() {
  beforeEach(function() {
    spyOn(window, 'split').and.callThrough();
    spyOn(window, 'merge').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });

  it('orders an Array', function() {
    expect(mergeSort([5, 8, 1, 14, 56, 2])).toEqual([1, 2, 5, 8, 14, 56]);
    expect(mergeSort([4, 1, 1, 56, -2, -65])).toEqual([-65, -2, 1, 1, 4, 56]);
    expect(mergeSort([-1, -43, 0, -5, -100])).toEqual([-100, -43, -5, -1, 0]);
  });

  it('handles and array of 1 element', function() {
    expect(mergeSort([5])).toEqual([5]);
  });

  it(`doesn't call split if Array.length === 1`, function() {
    mergeSort([1]);
    expect(window.split.calls.count()).toEqual(0);
  });
  it(`doesn't call merge if Array.length === 1`, function() {
    mergeSort([1]);
    expect(window.merge.calls.count()).toEqual(0);
  });
  it(`calls split 2 times if Array.length === 3`, function() {
    mergeSort([1, 2, 3]);
    expect(window.split.calls.count()).toEqual(2);
  });
  it(`calls merge 3 times if Array.length === 3`, function() {
    mergeSort([1, 2, 3]);
    expect(window.merge.calls.count()).toEqual(2);
  });
});

var solution = function(isBadVersion: any) {

  return function(n: number): number {
    function binSearch(startIndex: number, lastIndex: number): number {
      if (lastIndex === startIndex) {
        return isBadVersion(startIndex);
      } else if (lastIndex === 1 + startIndex) {
        return isBadVersion(startIndex) ? startIndex : lastIndex;
      }

      const half = startIndex + Math.floor((lastIndex - startIndex) / 2);

      return !isBadVersion(half) && isBadVersion(half + 1)
        ? half + 1
        : isBadVersion(half)
          ? binSearch(startIndex, half)
          : binSearch(half, lastIndex);
    }

    return binSearch(1, n);
  };
};

function isBadVersion(n: number) {
  console.log(n);
  return n === 2;
}

const result = solution(isBadVersion)(2);

console.log('Result:', result);

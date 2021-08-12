
/*
  Title:
    Parabolic Arc Length
  Description:
    We want to approximate the length of a curve representing a function y = f(x) with   a <= x <= b.
    First, we split the interval [a, b] into n sub-intervals with widths
    h1, h2, ... , hn
    by defining points
    x1, x2 , ... , xn-1 between a and b.
    This defines points
    P0, P1, P2, ... , Pn on the curve
    whose x-coordinates are a, x1, x2 , ... , xn-1, b
    and y-coordinates f(a), f(x1), ..., f(xn-1), f(b) .
    By connecting these points, we obtain a polygonal path approximating the curve.
    Our task is to approximate the length of a parabolic arc representing the curve y = x * x with x in the interval [0, 1].
    We will take a common step h between the points xi: h1, h2, ... , hn = h = 1/n
    and we will consider the points
    P0, P1, P2, ... , Pn on the curve.
    The coordinates of each Pi are (xi, yi = xi * xi).
    The function len_curve (or similar in other languages) takes n as parameter (number of sub-intervals) and returns the length of the curve.

    Note:
    When you "Attempt" tests are done with a tolerance of 1e-06 (except in PureScript where you must truncate your result to 9 decimal places).

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/562e274ceca15ca6e70000d3
  Discuss Link:
    https://www.codewars.com/kata/562e274ceca15ca6e70000d3/discuss
  Solutions Link:
    https://www.codewars.com/kata/562e274ceca15ca6e70000d3/solutions
*/
// Long Solution
// n numbers of intervals
/*
function lenCurve (n) {
  const curve = (x) => {
    return x * x;
  };
  const distance = (posA, posB) => {
    return Math.sqrt((posA.x - posB.x) ** 2 + (posA.y - posB.y) ** 2);
  };

  const points = Array
    .from(
      { length: n + 1 },
      (_, i) => i * (1 / n))
    .map(point => ({ x: point, y: curve(point) }));
  return Math.round(points.reduce(
    (acc, cur, i, arr) => {
      if (i + 1 < arr.length) {
        return acc + distance(cur, arr[i + 1]);
      }
      return acc;
    }
    , 0) * 1000000000) / 1000000000;
}
*/
// Short Solution
const lenCurve = n => {
  const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  };

  let d = 0;
  let count = 0;
  let x1 = 0;
  let y1 = 0;
  for (let x = 1 / n; count < n; x += 1 / n) {
    d += distance(x1, y1, x, x * x);
    x1 = x;
    y1 = x * x;
    count++;
  }
  return +d.toFixed(9);
};

// Function Export
module.exports = lenCurve;

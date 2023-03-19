const trap = (height) => {
  let groundLevel = height.shift();

  const aboveGround = height.map(item => (groundLevel <= item) ? item - groundLevel : 0);
  const belowGround = height.map(item => (groundLevel >= item) ? item : groundLevel);

  return [trap1(aboveGround), trap1(belowGround)];
};

const trap1 = (height) => {
  let leftMax = -1, rightMax = -1, left = 0, right = height.length - 1, water = 0;

  while (left <= right) {
    leftMax = height[left] > leftMax ? height[left] : leftMax
    rightMax = height[right] > rightMax ? height[right] : rightMax
    water += leftMax > rightMax ? rightMax - height[right--] : leftMax - height[left++];
  }

  return water;
};

const heights = [1, 3, 0, 0, 2, 0, 4];
console.log('BASE: ', trap(heights)); // [7, 3]

const eje1 = [1, 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('ejemplo 1: ', trap(eje1));

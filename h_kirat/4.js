//reduce method

const array = [1, 2, 3, 4];
function Reducer() {
  const initialValue = 2;

  const sumWithInitial = array.reduce((a, b) => a + b, initialValue);
  console.log(sumWithInitial);
}
Reducer();

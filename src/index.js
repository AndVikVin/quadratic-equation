module.exports = function solveEquation(equation) {
  // your implementation
  const newArr = equation.split(' ');
  let a = +newArr[0];
  let b = +newArr[4];
  let c = +newArr[8];
  if(newArr[7] === '-') c=-c;
  if(newArr[3] === '-') b=-b;
  let discrem = Math.sqrt(b*b -4*a*c);
  let firstRoot = Math.round((-b + discrem)/(2*a));
  let secondRoot = Math.round((-b - discrem)/(2*a));
  let result = [firstRoot,secondRoot];
  return result.sort((a,b)=>{return a-b});
}

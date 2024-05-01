//TODO: Think about how to solve the calculator (first version), build a working version.
//TODO: Test to better the solution. Test a lot so that you know that it still works!

export class Calculator {

  inputs: number[];

  constructor(initialNumbers){
    this.inputs = initialNumbers;
  }

  // Adds latest numbers
  // Removes them from inputs-array
  // Push new value to array
  add(){
    const num1 = this.inputs.pop();
    const num2 = this.inputs.pop();

    if(num1 && num2)
      this.inputs.push(num1+num2);
  }

  // Multiplies latest numbers
  // Removes them from inputs-array
  // Push new value to array
  multiply(){

  }

  // Subtract latest numbers 
  // Removes them from inputs-array
  // Push new value to array
  subtract(){

  }

  // Divide two latest numbers
  // Removes them from inputs-array
  // Push new value to array
  divide(){

  }

  // Add a number to the numers-array
  input(input: number){
    return this.inputs.push(input);
  }

  // Return latest response
  latest(){
    return this.peek();
  }

  // Return all numbers as array
  all(){
    
  }

  private peek() {
    return this.inputs[this.inputs.length-1];
  }
}
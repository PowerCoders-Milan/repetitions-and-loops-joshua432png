// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen

  for (var step = 0; step < 21; step++) {
    if(step % 2===0) {
      console.log(step + " is even");
    } else {
      if (step % 2!= 0) {
        console.log(step + " is odd");
      }
    }
  }

  //while loop

  var step = 0;
  while (step < 21) {
    if (step %2===0) 
    console.log(step + " is even");
    else 
    console.log(step + " is odd");
    step++
  }

console.log("Do while loop")
  var step = 0;
do{
  if(step % 2 ==0) console.log(step+" is even");
  else console.log(step+" is odd");
  step++;
}while(step <= 20);

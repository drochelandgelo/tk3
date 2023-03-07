 operation = prompt(`Choose operation (+, -, * or /)`);

 num1 = Number(prompt('Number one'))

 num2 = Number(prompt('Number two'))

 if (operation == '+'){
   resualt = num1 + num2;
   alert(`${num1} + ${num2} = ${resualt}`);}

  else if(operation == '-'){
   resualt = num1 - num2;
   alert(`${num1} - ${num2} = ${resualt}`);}

     else if (operation == '*'){
     resualt = num1 * num2
     alert(`${num1} * ${num2} = ${resualt}`);}

   else if (operation == '/'){
     resualt = num1 / num2;
     alert(`${num1} / ${num2} = ${resualt}`);}
     
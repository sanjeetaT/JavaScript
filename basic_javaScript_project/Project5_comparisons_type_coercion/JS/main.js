
document.write(typeof "Name");

document.write(typeof 3);

document.write("10" + 5);
function my_Function(){
    document.getElementById("Test").innerHTML = isNaN('This is a string');
}
    /* false statement*/
    /*  document.getElementById("Test").innerHTML = isNaN('007'); */
   /* document.getElementById("Test").innerHTML = isNaN('This is a string');*/
      document.write(2E310);
      document.write(-3E310); 
      document.write(10>2);
      document.write(10 < 2);  
     /* console.log(2+3); */
      /*Equal function */
      document.write(10==10);
      document.write(3==10);
      function equal_Function(){
        document.getElementById("Equal").innerHTML = (10==10);
    }
    /* tripall function */
      A = "Mango";
      B = "Mango";
      document.write(A===B);
      function tripall_Function(){
        document.getElementById("Tripall").innerHTML = (10===10);
      }
      X= 10;
      Y = 10;
      document.write(X===Y);
      /* and function */
      document.write(5>2 && 10>4);
      document.write(5>10 && 10>4);
      function and_Function(){
        document.getElementById("And").innerHTML = (5>2 && 10>4);
    }
      /* or function */
      document.write(5>2 || 10>4);
      document.write(5>10 || 10>20);
      function or_Function(){
        document.getElementById("Or").innerHTML = (5>2 || 10>4);
    }
      /* not function */
      function not_Function(){
          document.getElementById("Not").innerHTML = !(20>10);
      }
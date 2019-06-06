function sumUpTo(n){
    if (n > 1){
        //Remember in Recursion (function call itself)
        //it has to call the function up until the end (base case)
        //and then returns back up to the first call/function
        return sumUpTo(n - 1) + n
    } else {
        return 1	
        }
    }
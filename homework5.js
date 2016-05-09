function GetMedian(intA, intB, intC, intD, intE, intF, intG){
   var array = [intA, intB, intC, intD, intE, intF, intG];
   var size = 0;
   if(typeof intA == 'undefined' || intA == null){
       size = 0;
   }else if(typeof intB == 'undefined' || intB == null){
       size = 1;
   }else if(typeof intC == 'undefined' || intC == null){
       size = 2;
   }else if(typeof intD == 'undefined' || intD == null){
       size = 3;
   }else if(typeof intE == 'undefined' || intE == null){
       size = 4;
   }else if(typeof intF == 'undefined' || intF == null){
       size = 5
   }else if(typeof intG == 'undefined' || intG == null){
       size = 6;
   }else{
       size = 7;
   }
   array.sort(function(a,b){return a - b});
   var median = array[Math.floor(size / 2)];
   return median;
}

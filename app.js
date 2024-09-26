//// ARRAYS ////
  // Q.NO....1

  var student = [];

  // Q No...2 

  var names = ['sana','ali','afshan'];

  // Q No ...3

  var numbers = [2,3,5,7,9];

  //Q No...4

  var boolean =[true,false,true,false];

  // Q No....5

  var mixed = ['ali','lahore',54,true,false];

  //Q No...6

   var qualification= ['HSC','FSC','B.COM','BSC','M.Phill','PHD','MBBS'];

   document.write('<h1> Qualification :</h1> <br>');
   document.write('<ol>');
   qualification.forEach(function(qualification){
   document.write('<li>'+ qualification +'</li>')});
   document.write('</ol>');

   //Q No ...7

   var studentNames = ['ali','hadi','araiz',];
   var score =[120,149,190];
   var totalMarks =[200];
   for(var i=0; i < studentNames .length; i++ ){
    var percentage = (score[i]/ totalMarks) * 100;
    document.write('score  of :'  +  studentNames[i]  +  'is'
        + score[i]  + '.percentage :' +  percentage .toFixed(2) + '%<br>');
   }

   
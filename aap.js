// ----- Chapter # 21-25 -----

//  Task # 1

// var firstName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// var fullName = firstName +" "+ lastName
// document.write("Welcom "+ fullName)

//  Task # 2

// var favmobmad = prompt("Enter your favorite mobile model")
// var g = favmobmad
// for (i = 0 ; i = favmobmad.length ; i++){
//     document.write("<b>My favorite phone is:</b> " + favmobmad)
//     document.write("<br><b>Length of string is: </b>"+i)
//     break
// }

//  Task # 3

// var string = "Pakistani" 
// document.write("<b>String: </b>"+ string + "<br>")  
// for (i= 0 ; i < string.length ; i++){
//     if (string[i] === "n"){
//         document.write("The index number of 'n' is: " + i + "<br>")
//     }
// }
//  Task # 4

// var string = "Hello World"
// document.write("<b>String: </b>"+ string + "<br>")
// var index = string.lastIndexOf("l")
// document.write("<b>Last index of '" +string[index]+ "': </b>"+ index+ "<br>")

//  Task # 5
// var string = "Pakistani" 
// document.write("<b>String: </b>"+ string + "<br>") 
// for (i= 0 ; i < string.length ; i++){
//     if (i === 3){
//         document.write("Character at index 3: " + string[i])
//     }
// }

//  Task # 6

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// // var fullName = firstName +" "+ lastName
// var fullName = firstName.concat(" ", lastName)
// document.write("Welcom "+ fullName)

//  Task # 7

// var string = "Hyderabad"
// var index = string.replace("Hyder", "Islam")
// document.write("<b>After replacement: </b>"+ index+ "<br>")

//  Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var message1 = message.replace("and","&")
// document.write(message1)

//  Task # 9

// var string = "472"
// var tounumber = parseInt(472)
// document.write("<br><b>Value:</b> " + string)
// document.write("<br><b>Type:</b> String ")
// document.write("<br><b>Value:</b> " + tounumber)
// document.write("<br><b>Type:</b> Number ")

//  Task # 10

// var userinput = prompt("enter some text")
// var casechange= userinput.toUpperCase()
// document.write("User input: "+ userinput)
// document.write("<br>Upper case: "+ casechange )

//  Task # 11

// var useinput2 = prompt("Enter your text")
// var firstChar = useinput2.slice(0, 1);
// var otherChars = useinput2.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// document.write(cappedCity)


//  Task # 12

// var num = 35.36
// var string =num.toString()
// var integer = string.replace("." , "")
// document.write("<b>Number: </b>"+ num)
// document.write("<b><br>Result:</b> "+integer )

//  Task # 13


//  Task # 14

// var A =["cake", "apple pie", "cookies", "chips", "patties"]
// var food = prompt("Welcom to ABC Bakery.What do you want to order sir/ma'am")
// var flag = false
// for (i= 0; i < food.length; i++){
//     if (A[i] === food){
//         document.write(food+" is available at index " + i)
//         flag = true
//         break   
//     }
// }
// if (flag == false){
//     document.write("We are sorry "+food+" is not available at our bakery")
// }

//  Task # 15


//  Task # 16

// var university = "University of Karachi"
// var sp = university.split("")
// for (element of sp){
//     document.write(element+"<br>")
// }

//  Task # 17

// var userInput = prompt("Enter some text:")
// document.write(userInput[userInput.length - 1])

//  Task # 18

// var string = "The quick brown fox jumps over the lazy dog"
// var strArray = string.split(" ")
// count = 0
// for (element of strArray){
//     if (element.toLowerCase() === "the"){
//       count++  
//     }
//     // document.write(count)
// }
// document.write("Text: "+string+ "<br>")
// document.write("There are "+count+ " occurances of word 'the' ")

// ----- Chapter # 26-30 -----

//  Task # 1

// var takesint = prompt("Enter a positive integer")
// document.write("<b>number:</b> "+ takesint)

// var round = Math.round(takesint)
// document.write("<b><br>round off value:</b> "+ round)

// var floor = Math.floor(takesint)
// document.write("<b><br>floor value:</b> "+ floor)

// var ceil = Math.ceil(takesint)
// document.write("<b><br>ceil value:</b> "+ ceil)

//  Task # 2

// var takesint = prompt("Enter a negagtive integer")
// document.write("<b>number:</b> "+ takesint)

// var round = Math.round(takesint)
// document.write("<b><br>round off value:</b> "+ round)

// var floor = Math.floor(takesint)
// document.write("<b><br>floor value:</b> "+ floor)

// var ceil = Math.ceil(takesint)
// document.write("<b><br>ceil value:</b> "+ ceil)

//  Task # 3
// var absolute = prompt("Enter value")
// document.write("The absolute value of "+absolute+" is "+ Math.abs(absolute))

//  Task # 4

// var iRandomNumber ;
// var iRollDice;
// var i;

// iRollDice = prompt("How many times do you want to roll tha dice", 5)

// for (i= 1 ; i <= iRollDice ; i++){
//     iRandomNumber = Math.ceil(Math.random()*6)
//     document.write("random dice value: " + iRandomNumber + "<br>")
// }
// document.write("<br> <b> ----- Finished -----</b>")

//  Task # 5

// var tossHaed = " Heads "
// var tossTail = " Tails "
// var toss = Math.ceil(Math.random()*2)

// if (toss == 2){
//     document.write( toss )
//     document.write("<br>random coin value: " + tossHaed )
// }else {
//     document.write(toss )
//     document.write("<br>random coin value: " + tossTail )
// }

//  Task # 6

// var RadNum = Math.floor(Math.random() * 100) + 1;
// document.write("Ramdom number between 1 and 100: "+ RadNum)

//  Task # 7

// var userWeightinput = prompt("Enter ur weight in Kilograms")
// var userWeight = userWeightinput
// document.write("The weight of user is "+ userWeightinput)

//  Task # 8

// var input = parseInt(prompt("Enter a number between 1 and 10:"))
// var randomNumber = Math.ceil(Math.random()*10)
// if (input === randomNumber){
//   document.write("Congratulations! You guess the right secret number")
// }else{
//   document.write("Try Again!")
// }

// ----- Chapter # 31-34 -----

//  Task # 1

// var currentDatetime = new Date()
// document.write(currentDatetime)

//  Task # 2

// var monthNames = ["January","February","March","Aprail","May","June","July","August","September","Octuber","November","December"];
// var now = new Date()
// var theMonth = now.getMonth()
// var currentMonth = monthNames[theMonth]
// document.write("Current month: "+ currentMonth)

//  Task # 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var now = new Date()
// var theDay = now.getDay()
// var nameOfToday = dayNames[theDay]
// document.write("<br>Todat is "+nameOfToday)

//  Task # 4


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var now = new Date()
// var theDay = now.getDay()
// var nameOfToday = dayNames[theDay]
// if ( theDay === "Sat" || theDay === "Sun "){
//     document.write("<br>It's Fun day")
// }else {
//     document.write("It's not Funday")
// }

//  Task # 5

// var dates = ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
// var now = new Date()
// var theDate  = now.getDate()
// var firstDates = dates[theDate]
// if (theDate < 16){
//     document.write("<br><b>First fifteen days of the month</b>")
// }else {
//     document.write("<b>Last days of the month</b>")
// }

//  Task # 6

// var currentDatetime = new Date()
// document.write("<b>Current Date: </b>"+currentDatetime)

// var millsSince = currentDatetime.getTime();
// document.write("<br><b> Elapsed milliseconds since January 1 , 1970:</b> "+millsSince)

// var currMins = (millsSince/1000*60)
// document.write("<br><b> Elapsed minutes since January 1 , 1970: </b>"+currMins)


//  Task # 7    

// var date = new Date()
// var hour = date.getHours()
// if (hour <= 12 ){
//     document.write("<b>It's AM</b>")
// }else {
//     document.write("<b>It's PM</b>")
// }

//  Task # 8  

// var date = new Date()
// var setMonth = date.setMonth(11)
// var setDate = date.setDate(31)

// document.write("Later date: "+date)

//  Task # 9   

// var RamadanDate = new Date("June 18, 2015")
// var ramadanMill = RamadanDate.getTime()
// var date = new Date()
// var currentMill = date.getTime()
// var diff = currentMill - ramadanMill
// var days = diff/(1000*60*60*24)
// days = Math.round(days)
// document.write(days+ " days have passed since 1st Ramadan, 2015 ")

//  Task # 10  

// var refDate = new Date("Dec 5, 2015")
// var begin2015 = new Date("Jan 1,2015")
// var refMili = refDate.getTime()
// var beginMili = begin2015.getTime()
// var elapsedSec = refMili - beginMili
// elapsedSec = elapsedSec/(1000)
// document.write(elapsedSec)

//  Task # 11

// var date = new Date()
// var date2 = new Date()
// var hour = date.getHours()
// var anHourAhead = date2.setHours(hour - 1)
// document.write("Current Date: "+date+ "<br>")
// document.write("1 Hour ago, it was "+date2)

//  Task # 12

// var date = new Date()
// var date2 = new Date()
// var year = date.getFullYear()
// var yearsAhead = date2.setFullYear(year - 100)
// alert("Current Date: "+date+ "\n 100 years back, it was "+date2)

//  Task # 13

// var date = new Date()
// var userAge= parseInt(prompt("Enter your age: "))
// var year = date.getFullYear()
// var dob = date.setFullYear(year - userAge)
// var userBirthYear = date.getFullYear()

// document.write("Your age is: "+userAge+" <br>Your Birth Year is "+userBirthYear)

//  Task # 14

// var costName = "ABC Customer"
// var month = "February"
// var numUnits = 410
// var cPu = 16
// var latePayment = 350
// var nAp = numUnits * cPu
// var gAp = nAp + latePayment 

// document.write("<h1> K-Electric Bill </h1>")
// document.write("<br> Customer Name: <b>" + costName + "</b>")
// document.write("<br> Month: <b>" + month+ "</b>")
// document.write("<br>Number of units: <b>" + numUnits+ "</b>")
// document.write("<br>Charges per unit: <b>" + cPu + "</b><br>")
// document.write("<br>Net Amount Payable (within Due Date): <b>" + nAp+ "</b>")
// document.write("<br>Late payment surcharge: <b>" + latePayment+ "</b>")
// document.write("<br>Gross Amount Payable (after Due Date): <b>" + gAp+ "</b>")

// ----- Chapter # 35-38 -----

//  Task # 1

//  function tellTime() {
//      var now = new Date();
//     document.write(now)
//  }
// tellTime()


//  Task # 2

// function greetuser(){
//     var firstname = prompt("Enter first name")
//     var lastname = prompt("Enter last name")
//     document.write( "Welcome "+firstname+" "+lastname)
// }
// greetuser()

//  Task # 3

// function addNum(){
//     var firstNum = parseInt (prompt("Enter first number"))
//     var secNum = parseInt (prompt("Enter second number"))
//     var add = firstNum + secNum
//     document.write(add)
// }
// addNum()

//  Task # 4

// function calc(){
//     var num1 = parseInt(prompt("Enter first number"))
//     var operator = prompt("Enter your operator")
//     var num2 = parseInt(prompt("Enter second number"))
//     if (operator === "+"){
//         return num1 + num2
//     }else  if (operator === "-"){
//         return num1 - num2
//     }else  if (operator === "/"){
//         return num1 / num2
//     }else  if (operator === "%"){
//         return num1 % num2
//     }else  if (operator === "*"){
//         return num1 * num2
//     }else {
//         return "Incorrect operator"
//     }
// }
// document.write(calc())

//  Task # 5

// function square(number){
//     var sq = number * number
//     return sq;
// }
// document.write( square(3))

//  Task # 6

// function Factorial(num){
//     var fact
//     fact = 1
//     for (i = 1 ; i < num; i++){
//         fact = fact * (i+1)
//     }
//     return fact
// }
// document.write(Factorial(8))

//  Task # 7  

// function Counting(first , last){
//     for (i = first ; i <= last ; i++){
//         document.write(i+ "<br>")
//     }
// }
// var first = parseInt(prompt("Enter starting number of Countring: "))
// var last = parseInt(prompt("Enter last number of Countring: "))
// Counting(first , last)

//  Task # 8  

// function calculateHypotenuse(perp, base) {   
//     function calculateSquare(number){
//         var sq = number * number
//         return sq                       
//     }
//     var hyp = calculateSquare(perp) + calculateSquare(base)
//     hyp = Math.sqrt(hyp)
//     return hyp; 
// }
// var base = parseInt(prompt("Enter base of right angle triangle: "))
// var perp = parseInt(prompt("Enter perpendicular of right angle triangle: "))
// document.write( "The hypotenuse of right angle triangle is " +calculateHypotenuse(4, 3))

//  Task # 9    

// function areaOfRectangle(height ,width){
//     return height * width
// }
// document.write(areaOfRectangle(4 , 3)+ "<br>")
// var height = parseInt(prompt("Enter height of rectangle: "))
// var width = parseInt(prompt("Enter width of rectangle: "))
// document.write(areaOfRectangle(height, width))


//  Task # 10  

// var st = "the quick brown fox"
// function upperCase(string){
//     var array = string.split(" ")
//     var upperArray = []
//     for (element of array){
//         var firstLetter = element.slice(0,1)
//         firstLetter = firstLetter.toUpperCase()
//         var otherLetters = element.slice(1)
//         otherLetters = otherLetters.toLowerCase()
//         var letter = firstLetter + otherLetters
//         upperArray.push(letter)

//     }
//     return upperArray.join(" ")
// }

// document.write(upperCase(st))

//  Task # 11



//  Task # 12

// var string = "Web Development Tutorial"
// function longestWord(string) {
//     var array = string.split(" ")
//     var longestStr = array[0]
//     for (element of array){
//         if (element.length > longestStr.length){
//             longestStr = element
//         }
//     }
    
//     return longestStr
// }
// var sp = longestWord(string)
// document.write(sp)

//  Task # 13
//  Task # 14
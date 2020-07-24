		function question1() { //display the 1st question
		    window.mark = 0;
		    document.getElementById("num").innerHTML = "Question 1";
		    document.getElementById("question").innerHTML = "What is the capital city of the Sri Lanka?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans1_1' type='button' value='1' onclick='question2(); display1_1()'>1. Kandy</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans1_2' type='button' value='2' onclick='question2(); display1_2()'>2. Colombo</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans1_3' type='button' value='3' onclick='question2(); display1_3()'>3. Galle</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time1 = 10;
		    window.downloadTimer1 = setInterval(function() { //count the time for the 1st question
		        if (time1 <= 0) {
		            clearInterval(downloadTimer1);
		            window.Question1 = "<span class='time_out'> Question 1 ????  Timeout !!!! </span>";
		            question2();
		        } else {
		            document.getElementById("start").innerHTML = time1 + "s Remaining";
		        }
		        time1 -= 1;
		    }, 1000);
		}
		//2 is the correct answer
		function display1_1() {
		    window.Question1 = "<span class='wrong'> Question 1 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display1_2() {
		    window.Question1 = "<span class='correct'>Question 1 is correct &#x2714</span>";
		    mark += 2;
		}

		function display1_3() {
		    window.Question1 = "<span class='wrong'> Question 1 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question2() { //display the 2nd question
		    clearInterval(downloadTimer1);
		    document.getElementById("num").innerHTML = "Question 2";
		    document.getElementById("question").innerHTML = "How many district in Sri Lanka?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans2_1' type='button' value='1' onclick='question3(); display2_1()'>1. 25</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans2_2' type='button' value='2' onclick='question3(); display2_2()'>2. 26</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans2_3' type='button' value='3' onclick='question3(); display2_3()'>3. 24</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time2 = 10;
		    window.downloadTimer2 = setInterval(function() { //count the time for the 2nd question
		        if (time2 <= 0) {
		            clearInterval(downloadTimer2);
		            window.Question2 = "<span class='time_out'> Question 2 ????  Timeout !!!! </span>";
		            question3();
		        } else {
		            document.getElementById("start").innerHTML = time2 + "s Remaining";
		        }
		        time2 -= 1;
		    }, 1000);
		}
		//1 is the correct answer
		function display2_1() {
		    window.Question2 = "<span class='correct'>Question 2 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display2_2() {
		    window.Question2 = "<span class='wrong'> Question 2 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display2_3() {
		    window.Question2 = "<span class='wrong'> Question 2 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question3() { //display the 3ed question
		    clearInterval(downloadTimer2);
		    document.getElementById("num").innerHTML = "Question 3";
		    document.getElementById("question").innerHTML = "Longest river is Sri Lanka?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans3_1' type='button' value='1' onclick='question4(); display3_1()'>1. Mahaweli River</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans3_2' type='button' value='2' onclick='question4(); display3_2()'>2. Kelani River</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans3_3' type='button' value='3' onclick='question4(); display3_3()'>3. Walawe River</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time3 = 10;
		    window.downloadTimer3 = setInterval(function() { //count the time for the 3ed question
		        if (time3 <= 0) {
		            clearInterval(downloadTimer3);
		            window.Question3 = "<span class='time_out'> Question 3 ????  Timeout !!!! </span>";
		            question4();
		        } else {
		            document.getElementById("start").innerHTML = time3 + "s Remaining";
		        }
		        time3 -= 1;
		    }, 1000);
		}
		//1 is the correct answer
		function display3_1() {
		    window.Question3 = "<span class='correct'> Question 3 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display3_2() {
		    window.Question3 = "<span class='wrong'> Question 3 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display3_3() {
		    window.Question3 = "<span class='wrong'> Question 3 is incorrect &#10008</span>";
		    mark -= 1;
		}


		function question4() { //display the 4th question
		    clearInterval(downloadTimer3);
		    document.getElementById("num").innerHTML = "Question 4";
		    document.getElementById("question").innerHTML = "Tallest mountain in Sri Lanka?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans4_1' type='button' value='1' onclick='question5(); display4_1()'>1. Knuckles</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans4_2' type='button' value='2' onclick='question5(); display4_2()'>2. Kirigalpotta</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans4_3' type='button' value='3' onclick='question5(); display4_3()'>3. Piduruthalagala</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time4 = 10;
		    window.downloadTimer4 = setInterval(function() { //count the time for the 4th question
		        if (time4 <= 0) {
		            clearInterval(downloadTimer4);
		            window.Question4 = "<span class='time_out'> Question 4 ????  Timeout !!!! </span>";
		            question5();
		        } else {
		            document.getElementById("start").innerHTML = time4 + "s Remaining";
		        }
		        time4 -= 1;
		    }, 1000);
		}
		//3 is the correct answer
		function display4_1() {
		    window.Question4 = "<span class='wrong'> Question 4 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display4_2() {
		    window.Question4 = "<span class='wrong'> Question 4 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display4_3() {
		    window.Question4 = "<span class='correct'> Question 4 is correct &#x2714 </span>";
		    mark += 2;
		}


		function question5() { //display the 5th question
		    clearInterval(downloadTimer4);
		    document.getElementById("num").innerHTML = "Question 5";
		    document.getElementById("question").innerHTML = "Tallest waterfall in Sri Lanka?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans5_1' type='button' value='1' onclick='question6(); display5_1()'>1. Bopath Ella</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans5_2' type='button' value='2' onclick='question6(); display5_2()'>2. Bambarakanda Falls</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans5_3' type='button' value='3' onclick='question6(); display5_3()'>3. Hunasfalls</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time5 = 10;
		    window.downloadTimer5 = setInterval(function() { //count the time for the 5th question
		        if (time5 <= 0) {
		            clearInterval(downloadTimer5);
		            window.Question5 = "<span class='time_out'> Question 5 ????  Timeout !!!! </span>";
		            question6();
		        } else {
		            document.getElementById("start").innerHTML = time5 + "s Remaining";
		        }
		        time5 -= 1;
		    }, 1000);
		}
		//2 is the correct answer
		function display5_1() {
		    window.Question5 = "<span class='wrong'> Question 5 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display5_2() {
		    window.Question5 = "<span class='correct'> Question 5 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display5_3() {
		    window.Question5 = "<span class='wrong'> Question 5 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question6() { //display the 6th question
		    clearInterval(downloadTimer5);
		    document.getElementById("num").innerHTML = "Question 6";
		    document.getElementById("question").innerHTML = "Which district Ellla is located?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans6_1' type='button' value='1' onclick='question7(); display6_1()'>1. kandy</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans6_2' type='button' value='2' onclick='question7(); display6_2()'>2. Badulla</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans6_3' type='button' value='3' onclick='question7(); display6_3()'>3. Nuwara Eliya</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time6 = 10;
		    window.downloadTimer6 = setInterval(function() { //count the time for the 6th question
		        if (time6 <= 0) {
		            clearInterval(downloadTimer6);
		            window.Question6 = "<span class='time_out'> Question 6 ????  Timeout !!!! </span>";
		            question7();
		        } else {
		            document.getElementById("start").innerHTML = time6 + "s Remaining";
		        }
		        time6 -= 1;
		    }, 1000);
		}
		//2 is the correct answer
		function display6_1() {
		    window.Question6 = "<span class='wrong'> Question 6 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display6_2() {
		    window.Question6 = "<span class='correct'> Question 6 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display6_3() {
		    window.Question6 = "<span class='wrong'> Question 6 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question7() { //display the 7th question
		    clearInterval(downloadTimer6);
		    document.getElementById("num").innerHTML = "Question 7";
		    document.getElementById("question").innerHTML = "Which district sigiriya is located?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans7_1' type='button' value='1' onclick='question8(); display7_1()'>1. Matale</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans7_2' type='button' value='2' onclick='question8(); display7_2()'>2. Kandy</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans7_3' type='button' value='3' onclick='question8(); display7_3()'>3. Kurunegala</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time7 = 10;
		    window.downloadTimer7 = setInterval(function() { //count the time for the 7th question
		        if (time7 <= 0) {
		            clearInterval(downloadTimer7);
		            window.Question7 = "<span class='time_out'> Question 7 ????  Timeout !!!! </span>";
		            question8();
		        } else {
		            document.getElementById("start").innerHTML = time7 + "s Remaining";
		        }
		        time7 -= 1;
		    }, 1000);
		}
		//1 is the correct answer
		function display7_1() {
		    window.Question7 = "<span class='correct'> Question 7 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display7_2() {
		    window.Question7 = "<span class='wrong'> Question 7 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display7_3() {
		    window.Question7 = "<span class='wrong'> Question 7 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question8() { //display the 8th question
		    clearInterval(downloadTimer7);
		    document.getElementById("num").innerHTML = "Question 8";
		    document.getElementById("question").innerHTML = "Distance from colombo to kandy?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans8_1' type='button' value='1' onclick='question9(); display8_1()'>1. 150Km-160Km</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans8_2' type='button' value='2' onclick='question9(); display8_2()'>2. 90Km-100Km</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans8_3' type='button' value='3' onclick='question9(); display8_3()'>3. 120Km-130km</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time8 = 10;
		    window.downloadTimer8 = setInterval(function() { //count the time for the 8th question
		        if (time8 <= 0) {
		            clearInterval(downloadTimer8);
		            window.Question8 = "<span class='time_out'> Question 8 ????  Timeout !!!! </span>";
		            question9();
		        } else {
		            document.getElementById("start").innerHTML = time8 + "s Remaining";
		        }
		        time8 -= 1;
		    }, 1000);
		}
		//3 is the correct answer
		function display8_1() {
		    window.Question8 = "<span class='wrong'> Question 8 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display8_2() {
		    window.Question8 = "<span class='wrong'> Question 8 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display8_3() {
		    window.Question8 = "<span class='correct'>Question 8 is correct &#x2714 </span>";
		    mark += 2;
		}


		function question9() { //display the 9th question
		    clearInterval(downloadTimer8);
		    document.getElementById("num").innerHTML = "Question 9";
		    document.getElementById("question").innerHTML = "Distance from colombo to trincomalee?";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans9_1' type='button' value='1' onclick='question10(); display9_1()'>1. 260Km-270Km</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans9_2' type='button' value='2' onclick='question10(); display9_2()'>2. 300Km-310Km</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans9_3' type='button' value='3' onclick='question10(); display9_3()'>3. 250Km-260Km</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time9 = 10;
		    window.downloadTimer9 = setInterval(function() { //count the time for the 9th question
		        if (time9 <= 0) {
		            clearInterval(downloadTimer9);
		            window.Question9 = "<span class='time_out'> Question 9 ????  Timeout !!!! </span>";
		            question10();
		        } else {
		            document.getElementById("start").innerHTML = time9 + "s Remaining";
		        }
		        time9 -= 1;
		    }, 1000);
		}
		//1 is the correct answer
		function display9_1() {
		    window.Question9 = "<span class='correct'> Question 9 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display9_2() {
		    window.Question9 = "<span class='wrong'> Question 9 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display9_3() {
		    window.Question9 = "<span class='wrong'> Question 9 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function question10() { //display the 10th question
		    clearInterval(downloadTimer9);
		    document.getElementById("num").innerHTML = "Question 10";
		    document.getElementById("question").innerHTML = "Most spoken language in Sri Lanka";
		    document.getElementById("answer_1").innerHTML = "<button id='ans' name='ans10_1' type='button' value='1' onclick='display10_1(); output()'>1. Tamil</button>";
		    document.getElementById("answer_2").innerHTML = "<button id='ans' name='ans10_2' type='button' value='2' onclick='display10_2(); output()'>2. Sinhala</button>";
		    document.getElementById("answer_3").innerHTML = "<button id='ans' name='ans10_3' type='button' value='3' onclick='display10_3(); output()'>3. English</button>";
		    document.getElementById("distime").innerHTML = '';
		    document.getElementById("start").innerHTML = '';
		    window.time10 = 10;
		    window.downloadTimer10 = setInterval(function() { //count the time for the 10th question
		        if (time10 <= 0) {
		            clearInterval(downloadTimer10);
		            window.Question10 = "<span class='time_out'> Question 10 ????  Timeout !!!! </span>";
		            output();
		        } else {
		            document.getElementById("start").innerHTML = time10 + "s Remaining";
		        }
		        time10 -= 1;
		    }, 1000);
		}
		//2 is the correct answer
		function display10_1() {
		    window.Question10 = "<span class='wrong'> Question 10 is incorrect &#10008 </span>";
		    mark -= 1;
		}

		function display10_2() {
		    window.Question10 = "<span class='correct'> Question 10 is correct &#x2714 </span>";
		    mark += 2;
		}

		function display10_3() {
		    window.Question10 = "<span class='wrong'> Question 10 is incorrect &#10008 </span>";
		    mark -= 1;
		}


		function output() { //display the result for the quiz
		    clearInterval(downloadTimer10);
		    document.getElementById("num").innerHTML = "Answers for the quiz <br>";
		    document.getElementById("question").innerHTML = '';
		    document.getElementById("answer_1").innerHTML = Question1 + "<br>";
		    document.getElementById("answer_2").innerHTML = Question2 + "<br>";
		    document.getElementById("answer_3").innerHTML = Question3 + "<br>";
		    document.getElementById("horizontal").remove();
		    document.getElementById("distime").innerHTML = Question4 + "<br>";
		    document.getElementById("display1").innerHTML = Question5 + "<br>";
		    document.getElementById("display2").innerHTML = Question6 + "<br>";
		    document.getElementById("display3").innerHTML = Question7 + "<br>";
		    document.getElementById("display4").innerHTML = Question8 + "<br>";
		    document.getElementById("display5").innerHTML = Question9 + "<br>";
		    document.getElementById("display6").innerHTML = Question10 + "<br>";
		    document.getElementById("start").remove();

		    var remain_time = time1 + time2 + time3 + time4 + time5 + time6 + time7 + time8 + time9 + time10;
		    var tot_time = 91 - remain_time;
		    document.getElementById("display7").innerHTML = "You got " + tot_time + " seconds to finish the quiz <br>";
		    document.getElementById("display8").innerHTML = "Total marks = " + mark + "/20 <br>";

		    if (mark < 10) { //change the background color if the user get below 10/20
		        document.getElementById("quiz1").style.backgroundColor = "#ffb366";
		    }
		}
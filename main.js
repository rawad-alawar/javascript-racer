document.addEventListener('DOMContentLoaded', function() {

  var p1 = "#player1_strip";
  var p2 = "#player2_strip";
  var score1 = 0; 
  var score2 = 0;
  var trackLength = 8;


 document.addEventListener("keyup",keyStroke) 

 	function keyStroke(e){

	 	if (e.keyCode === 81 ){ 
				
				if(score1 < trackLength){
					move(p1); 
					score1 ++;
				}

				else if (score1 >= trackLength){
					alert("Player 1 wins");
					
					restart();
				}
			}

		else if (e.keyCode === 80 ){

			if(score2 < trackLength){
				move(p2);
				score2 ++;
			}
			else {
				alert("Player 2 wins");
				 
				restart();
			}
		}
	}

	function move(player){
		var move = document.querySelector(player +" .active");
		
		move.classList.remove("active");
		move = move.nextElementSibling;
		move.classList.add("active");
	}

	function restart(){
		location.reload();  
	}
})
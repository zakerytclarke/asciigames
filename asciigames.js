var key = "SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare";
var gamestate=0;
document.getElementById("txtio").fontSize="4vw";
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
function encodeStr(uncoded) {
  uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g,"");
  var coded = "";
  var chr;
  for (var i = uncoded.length - 1; i >= 0; i--) {
    chr = uncoded.charCodeAt(i);
    coded += (chr >= 65 && chr <= 90) ? 
      key.charAt(chr - 65 + 26*Math.floor(0)) :
      String.fromCharCode(chr); 
    }
  return encodeURIComponent(coded);  
  }
  function decodeStr(coded) {
  coded = decodeURIComponent(coded);  
  var uncoded = "";
  var chr;
  for (var i = coded.length - 1; i >= 0; i--) {
    chr = coded.charAt(i);
    uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ?
      String.fromCharCode(65 + key.indexOf(chr) % 26) :
      chr; 
    }
  return uncoded;   
  } 
cls();
var url="https://zakerytclarke.github.io/asciigames/?";

println("Tic-Tac-Toe");
println("");
println("<span id='ttt0' onclick='ttt(0);'>_</span>|<span id='ttt1' onclick='ttt(1);'>_</span>|<span id='ttt2' onclick='ttt(2);'>_</span>");
println("<span id='ttt3' onclick='ttt(3);'>_</span>|<span id='ttt4' onclick='ttt(4);'>_</span>|<span id='ttt5' onclick='ttt(5);'>_</span>");
println("<span id='ttt6' onclick='ttt(6);'> </span>|<span id='ttt7' onclick='ttt(7);'> </span>|<span id='ttt8' onclick='ttt(8);'> </span>");
println("");
println("<span style='font-size:2vw;'>"+url+"game=ttt&state="+get("state")+"</span>");
var ostate="";
for(var i=0;i<9;i++){
	var char=decodeStr(get("state").charAt(i));
	if(char=="Z"){
		ostate+="_";
	}else if(char=="X"){
		document.getElementById("ttt"+i).innerHTML="X";
		ostate+="X";
	}else if(char=="O"){
		document.getElementById("ttt"+i).innerHTML="O";
		ostate+="O";
	}else{
		println("");
		println("Error");
	}
			   if(document.getElementById("ttt0").innerHTML=="X"&&document.getElementById("ttt1").innerHTML=="X"&&document.getElementById("ttt2").innerHTML=="X"){
		win("X Wins!");
	}
	if(document.getElementById("ttt3").innerHTML=="X"&&document.getElementById("ttt4").innerHTML=="X"&&document.getElementById("ttt5").innerHTML=="X"){
		win("X Wins!");
	}
		if(document.getElementById("ttt6").innerHTML=="X"&&document.getElementById("ttt7").innerHTML=="X"&&document.getElementById("ttt8").innerHTML=="X"){
		win("X Wins!");
	}	
	
	
	if(document.getElementById("ttt0").innerHTML=="X"&&document.getElementById("ttt3").innerHTML=="X"&&document.getElementById("ttt6").innerHTML=="X"){
		
		win("X Wins!");
	}
	if(document.getElementById("ttt1").innerHTML=="X"&&document.getElementById("ttt4").innerHTML=="X"&&document.getElementById("ttt7").innerHTML=="X"){
		
		win("X Wins!");
	}
		if(document.getElementById("ttt2").innerHTML=="X"&&document.getElementById("ttt5").innerHTML=="X"&&document.getElementById("ttt8").innerHTML=="X"){
		
		win("X Wins!");
	}	
		if(document.getElementById("ttt0").innerHTML=="X"&&document.getElementById("ttt4").innerHTML=="X"&&document.getElementById("ttt8").innerHTML=="X"){
		
		win("X Wins!");
	}	
		if(document.getElementById("ttt6").innerHTML=="X"&&document.getElementById("ttt4").innerHTML=="X"&&document.getElementById("ttt2").innerHTML=="X"){
		
		win("X Wins!");
	}	
	
	if(document.getElementById("ttt0").innerHTML=="O"&&document.getElementById("ttt1").innerHTML=="O"&&document.getElementById("ttt2").innerHTML=="O"){
		win("O Wins!");
	}
	if(document.getElementById("ttt3").innerHTML=="O"&&document.getElementById("ttt4").innerHTML=="O"&&document.getElementById("ttt5").innerHTML=="O"){
		win("O Wins!");
	}
		if(document.getElementById("ttt6").innerHTML=="O"&&document.getElementById("ttt7").innerHTML=="O"&&document.getElementById("ttt8").innerHTML=="O"){
		win("O Wins!");
	}	
	
	
	if(document.getElementById("ttt0").innerHTML=="O"&&document.getElementById("ttt3").innerHTML=="O"&&document.getElementById("ttt6").innerHTML=="O"){
		
		win("O Wins!");
	}
	if(document.getElementById("ttt1").innerHTML=="O"&&document.getElementById("ttt4").innerHTML=="O"&&document.getElementById("ttt7").innerHTML=="O"){
		
		win("O Wins!");
	}
		if(document.getElementById("ttt2").innerHTML=="O"&&document.getElementById("ttt5").innerHTML=="O"&&document.getElementById("ttt8").innerHTML=="O"){
		
		win("O Wins!");
	}	
		if(document.getElementById("ttt0").innerHTML=="O"&&document.getElementById("ttt4").innerHTML=="O"&&document.getElementById("ttt8").innerHTML=="O"){
		
		win("O Wins!");
	}	
		if(document.getElementById("ttt6").innerHTML=="O"&&document.getElementById("ttt4").innerHTML=="O"&&document.getElementById("ttt2").innerHTML=="O"){
		
		win("O Wins!");
	}	
	
	

}
function win(str){
	if(gamestate==0){
		println("");
		println(str);
	}
	gamestate=1;

}
function sendCode(){
  var el = document.createElement('textarea');
  el.value = document.getElementById("txtio").innerHTML.replace(/<(?:.|\n)*?>/gm, '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
	alert("Code Copied to Clipboard. Paste to share it.");
	
}

function ttt(move){
if(gamestate==0){
	if(ostate.split("X").length<=ostate.split("O").length){
		document.getElementById("ttt"+move).innerHTML="X";
	}else{
		document.getElementById("ttt"+move).innerHTML="O";
	}
	var state="";
	for(var i=0;i<9;i++){
		var char=document.getElementById("ttt"+i).innerHTML;
		if(char=="_"||char==" "){
			state+=encodeStr("Z");
		}else{
			state+=encodeStr(char);
		}
	}
	window.location.href="?"+"game=ttt&state="+state;
	}
}







/*
println("_ _ _  _ _  _ _ _");
println("");
println(" /==\\");
println("    |");
println("    |");
println("    |");
println("   ===");
println("");
println("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");

println("Battleship");
println("");
println(" A B C D E");
println("1_ _ _ _ _");
println("2_ _ _ _ _");
println("3_ _ _ _ _");
println("4_ _ _ _ _");
println("5_ _ _ _ _");
*/


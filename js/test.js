// get the button and make it respond to a click
var theButton = document.getElementById("b1");
theButton.onclick = feedTheButton1;

// var theButton = document.getElementById("b2");
// theButton.onclick = feedTheButton2;

// Note: Import [BigInteger.js](https://github.com/peterolson/BigInteger.js).
// It has a function mod(number) and modInv(mod).
// Exg: bigInt(59).mod(5) => 4; bigInt(3).modInv(11) => 4

function ECdouble(G,a,b,P){
	// G = (x1,y1) where x1,y1 are integers.
  var lambda_mod = bigInt(bigInt(bigInt(bigInt(bigInt(G[0]).pow(2)).multiply(3)).add(a)).multiply(bigInt(bigInt(G[1]).multiply(2)).modInv(P))).mod(P);
  var x2 = bigInt(bigInt(bigInt(bigInt(lambda_mod).square()).minus(G[0])).minus(G[0])).mod(P);
  var y2 = bigInt(bigInt(bigInt(lambda_mod).multiply(bigInt(G[0]).minus(x2))).minus(G[1])).mod(P);
  if (bigInt(x2).lesser(0)){
    x2 = bigInt(x2).add(P);
  }
  if (bigInt(y2).lesser(0)){
    y2 = bigInt(y2).add(P);
  }
  var double = [x2,y2];
  return double
}

function ECadd(A,B,P){
	var lambda_mod2 = bigInt(bigInt(bigInt(B[1]).minus(A[1])).multiply(bigInt(bigInt(B[0]).minus(A[0])).modInv(P))).mod(P);
  var x3 = bigInt(bigInt(bigInt(bigInt(lambda_mod2).square()).minus(A[0])).minus(B[0])).mod(P);
  var y3 = bigInt(bigInt(bigInt(lambda_mod2).multiply(bigInt(bigInt(A[0]).minus(x3)))).minus(A[1])).mod(P);
  if (bigInt(x3).lesser(0)){
    x3 = bigInt(x3).add(P);
  }
  if (bigInt(y3).lesser(0)){
    y3 = bigInt(y3).add(P);
  }
  var add2 = [x3,y3];
  return add2
}

function ECMultiplication(G,a,b,P,N,privateKey){
	/* if (privateKey < 1 || privateKey >= N) {
	  return "ECMultiplication(G,privateKey,a,b,P), privateKey should >0 and 
var cartTotal = 0;
var count1=0
var count2=0
var count3=0
var count4=0
var count5=0
var count6=0
var count7=0
var count8=0
var count9=0
var count10=0
var count11=0
var count12=0
function addToCart(buttonId) {
    for (var i = 1; i <= 12; i++) {
      var currentButtonId = 'b' + i;
      
      if (buttonId === currentButtonId) {
        switch (i) {
          case 1:
            cartTotal += 229;
            count1++;
            document.getElementById('r1').style.visibility = 'visible';
            break;
          case 2:
            cartTotal += 127;
            document.getElementById('r2').style.visibility ='visible';
            count2++;
            break;
          case 3:
            cartTotal += 150;
            document.getElementById('r3').style.visibility = 'visible';
           count3++; 
           break;
            
          case 4:
            cartTotal += 250;
            document.getElementById('r4').style.visibility = 'visible';
            count4++;
            break;
          case 5:
            cartTotal += 310;
            document.getElementById('r5').style.visibility = 'visible';
            count5++;
            break;
          case 6:
            cartTotal += 170;
            document.getElementById('r6').style.visibility = 'visible';
            count6++;
            break;
          case 7:
            cartTotal += 270;
            document.getElementById('r7').style.visibility = 'visible';
            count7++;
            break;
          case 8:
            cartTotal += 175;
            document.getElementById('r8').style.visibility = 'visible';
            count8++;
            break;
          case 9:
            cartTotal += 230;
            document.getElementById('r9').style.visibility = 'visible';
            count9++;
            break;
          case 10:
            cartTotal += 290;
            document.getElementById('r10').style.visibility = 'visible';
            count10++;
            break;
          case 11:
            cartTotal += 350;
            document.getElementById('r11').style.visibility = 'visible';
            count11++;
            break;
          case 12:
            cartTotal += 340;
            document.getElementById('r12').style.visibility = 'visible';
            count12++;
            break;
        }
      }
    }
  }
function removeFromCart(buttonId) {
  for (var i = 1; i <= 12; i++) {
    var currentButtonId = 'b' + i;
   if(cartTotal != 0){
    if (buttonId === currentButtonId) {
      switch (i) {
        case 1:
          cartTotal -= 229;
          count1--;
          if(count1==0){
            document.getElementById('r1').style.visibility = 'hidden';
          }
          break;
        case 2:
          cartTotal -= 127;
          count2--;
          if(count2==0){
            document.getElementById('r2').style.visibility = 'hidden';
          }
          break;
        case 3:
          cartTotal -= 150;
          count3--;
          if(count3==0){
            document.getElementById('r3').style.visibility = 'hidden';
          }
          break;
        case 4:
          cartTotal -= 250;
          count4--;
          if(count4==0){
            document.getElementById('r4').style.visibility = 'hidden';
          }
          break;
        case 5:
          cartTotal -= 310;
          count5--;
          if(count5==0){
            document.getElementById('r5').style.visibility = 'hidden';
          }
          break;
        case 6:
          cartTotal -= 170;
          count6--;
          if(count6==0){
            document.getElementById('r6').style.visibility = 'hidden';
          }
          break;
        case 7:
          cartTotal -= 270;
          count7--;
          if(count7==0){
            document.getElementById('r7').style.visibility = 'hidden';
          }
          break;
        case 8:
          cartTotal -= 175;
          count8--;
          if(count8==0){
            document.getElementById('r8').style.visibility = 'hidden';
          }
          break;
        case 9:
          cartTotal -= 230;
          count9--;
          if(count9==0){
            document.getElementById('r9').style.visibility = 'hidden';
          }
          break;
        case 10:
          cartTotal -= 290;
          count10--;
          if(count10==0){
            document.getElementById('r10').style.visibility = 'hidden';
          }
          break;
        case 11:
          cartTotal -= 350;
          count11--;
          if(count11==0){
            document.getElementById('r11').style.visibility = 'hidden';
          }
          break;
        case 12:
          cartTotal -= 340;
          count12--;
          if(count12==0){
            document.getElementById('r12').style.visibility = 'hidden';
          }
          break;
      }
    }
  
  }
}}

function displayTotal() {
  document.getElementById("cartTotal").innerHTML = "Cart Total: " + cartTotal + " AED";
}




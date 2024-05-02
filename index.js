var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        this.style.color = 'red';
      this.style.fontSize = '20px';

    });
    });

    
var allviewButton = document.querySelectorAll(".allview")
var busoffers = document.querySelectorAll(".busoffers")
 
    allviewButton.onclick = function(){
        busoffers.classList.toggle("busoffers-after-click");
    }
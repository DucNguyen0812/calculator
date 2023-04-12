let number=[];
let evalhtml='';

function display(num){
  number.push(num);
  render();
}

function render(){
  let html='';
  for(i=0;i<number.length;i++){
    html+=`${number[i]}`;
  }
  document.getElementById('js-display').value=html;
  evalhtml=html;
}


function cal(){
  if (number[0]===undefined){number=[];}else{number=[eval(evalhtml)] ;}
  
 
 render();
}

function dele(){
  number.splice(number.length-1,1);
  render();
}

function reset(){
  number=[];
  render();
}

function check(va){
  if (va===number[number.length-1]) {number.splice(number.length-1,1);} 
}
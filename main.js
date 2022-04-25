//Task1

var i = 30;

while(i < 40) {
  i ++;
  if(i%2) console.log(i);
}

//Task2

for(var i = 70; i >39; i--) {
  if(i%2 == 0) console.log(i);
}

//Task 3

var i = 70;

while(i>39) {
  if(i%2 == 0) console.log(i);
  i--;
}

//Task4

var total = 0;

for(i = 1; i <= 100; i++){
  total += i;
}
console.log(total);

//Task5

var smile = ':)';

for(i = 0; i <= 9; i++) {
  console.log(smile);
  smile += ':)';
}

//Task6

for(var i = 1;i <= 50; i ++) {
  if(i % 3 == 0 && i % 5 == 0) {console.log('JavaScript');
  }else if(i % 5 === 0) {console.log('Script');
  }else if(i % 3 === 0) {console.log('Java');
  }else {console.log(i);
  }
}

//Task7

var num = 1000;

for(i = 0; num >= 50; i++) {
  num = num/2;
}

console.log('Итераций: ' + i +', получилось число ' + num);

//Task8

var i = 45;

while(i <= 170) {
  i++;
  if(i % 10 === 0){console.log(i)}
}

//Task9

var num = '';

for(i = 19;i <= 27;i++) {
  if(i % 3 != 0) {num += i + ' ';
  } else {num += i;
    console.log(num);
    num = '';
  }
}
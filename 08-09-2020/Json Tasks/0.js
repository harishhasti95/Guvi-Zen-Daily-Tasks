var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}

/* 1 */
cat.height = '2ft'
cat.width = '4ft'
console.log(cat)

/* 2 */
cat.name = 'Fluffyy'
console.log(cat)

/* 3 */
var act = cat.catFriends.length;
console.log((cat.catFriends)[0].activities)
console.log((cat.catFriends)[1].activities)

/* 4 */
console.log(cat.catFriends[0].name)
console.log(cat.catFriends[1].name)


/* 5 */
var sum = 0;
for(j=0;j<act.length;j++){
	sum += cat.catFriends.weight
}
console.log('Total weight of CAt Froends are', sum);

/* 6 */
var ss = [];bl = 0;
for(m=0;m<act.length;m++){
	ss.push(cat.catFriends.activities)
}

console.log('The total number of activities is ',ss.length)

/* 7 */
cat.catFriends[0].activities.push('eat');
cat.catFriends[0].activities.push('sleep');
console.log(cat);
cat.catFriends[1].activities.push('drink');
cat.catFriends[1].activities.push('smile');
console.log(cat);

/* 8 */
cat.catFriends[0].furcolor = 'black';
console.log(cat)



/* Part B */
var myCar = {
      make: 'Bugatti',
      model: 'Bugatti La Voiture Noire',
      year: 2019,
      accidents: [
          {
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
          },
          {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
          },
          {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
          }
       ]
    }


for(v =0; v< myCar.accidents.length; v++){
      myCar.accidents[v].atFaultForAccident = false;
  }
for(v1 =0; v1< myCar.accidents.length; v1++){
      console.log(myCar.accidents[v1].date)
    }
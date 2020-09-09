var arr = ['hari','giri','suri'];
(function (ar){
	for(i=0;i<ar.length;i++){
		ar[i] = ar[i].charAt(0).toUpperCase() + ar[i].slice(1)
      }
      console.log(ar);
 })(arr)
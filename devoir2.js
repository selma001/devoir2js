//remove an element from an array
function remove(arr, val) {
    n = arr.length;
    i = 0;
    while (arr[i] < n) {
        if (arr[i] == val) {
            for (var j = i; j < n; j++) {
                arr[j] = arr[j + 1];
            }
            n--;
        }

        i++;
    }
    if (arr[n - 1] == val) {
        n--;
    }
    return arr;
}
var ary = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(remove(ary, 6));

//removing duplicated element from an array
function removeDup(sel) {
    n=sel.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n;) {
           if (sel[j] == sel[i]) {
              for (let k = j; k < n; k++) {
                 sel[k] = sel[k + 1];
              }
              n--;
           } else
              j++;
        }
     }
}
var nbr = [1,2,3,3,4];
console.log(removeDup(nbr));


/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
  //  preferences.sort();
    i = preferences.length;

// document.write(preferences);
     s = 0;
    var n;
    var z;
    var k;
    var x;
    var y;
    var sum;
    var f = true;
    for (k = 0; k<=i; k++) {


        if (i<3)
        {
            f = false;
        }

    n = k+1;
    z = preferences[k];
    x = preferences[z-1];
    y = preferences[x-1];

        if (n===y && f==true)
        {
            s++;
        }
    }
    sum = Math.floor(s/3);
    return sum;
}

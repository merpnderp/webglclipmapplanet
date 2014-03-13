/**
 * Created by kalebmurphy on 3/12/14.
 */


module.exports = function(radius, resolution, fov, lowestHeight){

    var vs = Math.tan(fov / Window.innerWidth);

    var lt = ( (lowestHeight * vs) / radius ) * resolution;

    //lt = (1 / Math.pow(2, i) ) * Math.PI;

    //lt / Math.PI = (1 / Math.pow(2,i))

    //Math.pow(2,i) * (lt / Math.PI) = 1;

    //Math.pow(2,i) = 1 / (lt / Math.PI);

    //i * Math.log(2) = Math.log(1 / (lt / Math.PI));

    //i = (Math.log(1 / (lt / Math.PI))) / Math.log(2);

    var i = (Math.log(1 / (lt / Math.PI))) / Math.log(2);
    i = Math.floor(i);

    return i;
}

var a = Number(prompt('Введіть значення a'));
var b = Number(prompt('Введіть значення b'));
var c = Number(prompt('Введіть значення c'));
var D = (b*b) - 4*a*c;
alert (D);

var x1, x2, y, xi;
function equation(){
    if (D>0) {
        D = Math.sqrt (D);
        x1 = -b-D/a*2;
        x2 = -b+D/a*2;
        return x1,x2;
    } else {
        if (D<0){
            xi = 'Нема коренів';
            return xi;
        }else{
            if (D===0){
                y=-b/a*2;
            }
        }
    }
}
alert (equation(y));
alert (equation(xi));
alert(equation(x1,x2));

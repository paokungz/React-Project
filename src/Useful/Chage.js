import { compile, derivative } from 'mathjs';
const func = (fx, X) => {
    var expr = compile(fx); // f(x)
    let scope = { x: parseFloat(X) }; //f(x) ; x=input
    return expr.evaluate(scope); 
}
const error = (xnew, xold) => {
    return Math.abs((xnew - xold) / xnew);
}
const funcDiff = (fx, X) => {
    let scope = {x:parseFloat(X)};
    var expr = derivative(fx, 'x');
    return expr.evaluate(scope); 
}
export{ func,error,funcDiff};
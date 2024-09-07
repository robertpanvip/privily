import privily from '../../src'

const A = privily((scope: { a: number }) =>
    class A {
        static a = 123

        constructor() {
            scope.a = 78888
        }

        getA() {
            console.log(scope.a)
        }
    }
);
const c = new A();
c.getA()
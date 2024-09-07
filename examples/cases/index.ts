import privily from '../../src'

// 定义一个带私有作用域的类
const MyClass = privily((scope: { privateData: string }) => {
    class MyClass {
        constructor(public name: string) {
            // 初始化私有变量
            scope.privateData = "This is private!";
        }

        getPrivateData() {
            // 访问私有变量
            return scope.privateData;
        }
    }

    return MyClass;
});

const instance = new MyClass('example');
console.log(instance.name);  // 输出: 'example'
console.log(instance.getPrivateData());  // 输出: 'This is private!'

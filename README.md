   

privily
=======

privily 是一个高阶函数，用于为 JavaScript/TypeScript 类创建私有变量作用域。通过这个工具，开发者可以轻松实现类中的私有变量，而无需依赖外部库或语言级别的私有成员特性。它为每个类实例提供了一个独立但安全的私有作用域，从而提高了代码的封装性与安全性

[![NPM Version](https://img.shields.io/npm/v/privily?color=33cd56&logo=npm)](https://www.npmjs.com/package/privily)  [![NPM Version](https://img.shields.io/npm/dm/privily.svg?style=flat-square)](https://www.npmjs.com/package/privily)  [![unpacked size](https://img.shields.io/npm/unpacked-size/privily?color=green)](https://www.npmjs.com/package/privily)  [![Author](https://img.shields.io/badge/docs_by-robertpanvip-blue)](https://github.com/robertpanvip/privily.git)

📦 **Installation**
-------------------

    npm install privily

🔨 **Usage**
------------

    import privily from 'privily'
    
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
    

[🖥️](https://code.juejin.cn/)  
  

🏠 Exports
----------

### 

|参数|类型|
|---|---|
|🎗️$|`Functions`|
|🎗️default|`Functions`|

**🎗️Functions**
----------------

  
  

#### $

*   privily 函数是一个高阶函数，用于通过共享作用域实现类中的私有变量。 它接收一个函数 \`c\` 作为参数，这个函数接受一个类型为 S 的作用域（\`scope\`）， 并返回一个构造函数 T。privily 的目的是包装这个构造函数并扩展其功能，使其能够在 每个实例中共享一个私有作用域。  
      
    
    #### Type Parameters
    
    *   S extends `object`
    *   T extends `Constructor`<`any`\>
    
*   $<S, T\>(c:((scope:S) => T)): T

  
  

#### default

*   privily 函数是一个高阶函数，用于通过共享作用域实现类中的私有变量。 它接收一个函数 \`c\` 作为参数，这个函数接受一个类型为 S 的作用域（\`scope\`）， 并返回一个构造函数 T。privily 的目的是包装这个构造函数并扩展其功能，使其能够在 每个实例中共享一个私有作用域。  
      
    
    #### Type Parameters
    
    *   S extends `object`
    *   T extends `Constructor`<`any`\>
    
*   default<S, T\>(c:((scope:S) => T)): T
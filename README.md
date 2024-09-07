   

privily
=======

privily

[![NPM Version](https://img.shields.io/npm/v/privily?color=33cd56&logo=npm)](https://www.npmjs.com/package/privily)  [![NPM Version](https://img.shields.io/npm/dm/privily.svg?style=flat-square)](https://www.npmjs.com/package/privily)  [![unpacked size](https://img.shields.io/npm/unpacked-size/privily?color=green)](https://www.npmjs.com/package/privily)  [![Author](https://img.shields.io/badge/docs_by-robertpanvip-blue)](https://github.com/robertpanvip/privily.git)

📦 **Installation**
-------------------

    npm install privily

🔨 **Usage**
------------

    import privily from 'privily'
    
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
// 定义一个泛型构造函数类型 Constructor，
// 用于描述任何具有构造函数签名的类（可以有任意参数，返回类型为 T）
type Constructor<T = any> = new (...args: any[]) => T;

/**
 * privily 函数是一个高阶函数，用于通过共享作用域实现类中的私有变量。
 * 它接收一个函数 `c` 作为参数，这个函数接受一个类型为 S 的作用域（`scope`），
 * 并返回一个构造函数 T。privily 的目的是包装这个构造函数并扩展其功能，使其能够在
 * 每个实例中共享一个私有作用域。
 *
 * @param c - 接收一个共享作用域并返回一个构造函数的函数
 * @returns 返回经过包装的构造函数 T，使得每个实例都可以访问到私有作用域
 */
export default function privily<S extends object, T extends Constructor>(c: (scope: S) => T): T {
    // 包装器函数，负责通过原始类构造实例并注入私有作用域
    const wrapper = function (...args: never[]) {
        // 创建一个空对象 `scope`，作为私有作用域，类型为 S
        const scope = {} as S;

        // 调用传入的函数 `c`，并将 `scope` 传递进去，以获得要包装的原始类
        const WrappedClass = c(scope);

        // 使用包装后的类创建实例，传入所有构造函数的参数
        const instance = new WrappedClass(...args);

        // 设置新实例的原型为 WrappedClass 的原型，确保新实例可以访问到原始类的所有原型方法
        Object.setPrototypeOf(wrapper.prototype, WrappedClass.prototype);

        // 将原始类的静态属性复制到 `wrapper` 上，保留类的静态方法和属性
        Object.getOwnPropertyNames(WrappedClass).forEach(key => {
            // 忽略 "prototype" 属性，防止覆盖 `wrapper` 自己的原型
            if (key !== "prototype") {
                (wrapper as any)[key] = (WrappedClass as any)[key];
            }
        });

        // 返回创建好的实例
        return instance;
    };

    // 返回的 wrapper 函数需要保持与原始类类型兼容，因此我们将其转换为构造函数类型 T
    return wrapper as unknown as T;
}

// 将 privily 函数命名为 $，作为导出的一个别名
export const $ = privily;
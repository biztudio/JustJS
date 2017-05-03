基本语法
===

[var & let](http://blog.csdn.net/lcstrive/article/details/43149167) 
不同点在于作用域， var关键词的作用域是最近的函数作用域（如果在函数体的外部就是全局作用域）， let 关键词的作用域是最接近的块作用域（如果在任何块意外就是全局作用域），这将会比函数作用域更小。比如，一个包含 for 循环的函数，let 只是在 for 循环中， var  却是在整个函数都是可见的。[参考](http://www.cnblogs.com/hustskyking/p/ES6-computed-properties.html)

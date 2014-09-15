Tempy
=====

Tempy is going to be a small templating engine.
First version will have only binding template with given data (object, array or primitive).
It has jQuery as dependency.
In later versions I am planing to add helpers like loops and remove jQuery dependency.

Examples
=======
Object

Tempy.compile("#testObject", {name: "object"});

Hello, World!

Array

Tempy.compile("#testArray", ["John", "Mike"]);

Hello John and Mike!

Array

Tempy.compile("#testArray", "World");

Hello World!
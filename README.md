# Algorithms

The purpose of this repository is to document and solve the exercises from Grokking Algorithms clearly, as well as practice algorithm implementation.

## Solved Exercises (pt-br)

Below are the exercises I've solved so far, in Portuguese (pt-br):

1.1 - log<sub>2</sub>128 = 7
1.2 - log<sub>2</sub>256 = 8
1.3 - O(log n)
1.4 - O(n)
1.5 - O(n)
1.6 - O(n)

2.1 - Lista.
2.2 - Lista encadeada, pois não preciso ter acesso aleatório.
2.3 - Array, pois permite o acesso aleatório.
2.4 - (1) Inserções em array são O(n), logo são mais lentos que em listas O(1).
2.4 - (2) Eles são inseridos ao fim do array.
2.5 - É mais rápida que arrays para inserções e eliminações, e mais rápida que listas encadeadas para buscas.

3.1 - Informações:
```
> "sauda" é chamada
> "sauda2" é chamada
>> "sauda2" fica no topo da pilha
>>> "sauda" fica suspensa
> "sauda2" termina de executar e sai da pilha
> "sauda" é retomada
```
3.2 - A pilha vai crescendo "infinitamente" até explodir a memória.

4.1 - [recursive_sum.js](./src/recursive_sum.js)
4.2 - [recursive_sum.js](./src/recursive_sum.js)
4.3 - Caso base: array com um item.
Caso recursivo: o array é dividido pela metade até o valor ser encontrado.

## How to Contribute
If you find any errors or have suggestions for improvements, feel free to fork this repository and open a pull request.

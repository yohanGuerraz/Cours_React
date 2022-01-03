# Cours_React
Sauvegarde du Cours et des différents projets en React

#### Dans cette solution sont regroupés les projet suivant:

- [Cours_React](#Cours)
- [Projet 1](#projet-Projet_1)
- [Sources](#Sources)
	
**************************************************************************************
	
<div id='Cours'/>

## Contenue du cours sur React

#### Rappel JavaScript


Qu'est ce que le JavaScript ?

JavaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. 

Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat. Le code JavaScript est interprété ou compilé à la volée (JIT). 

C'est un langage à objets utilisant le concept de prototype, disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet.


Declaration d'une variable en JavaScript
```js
let myVariable = 'Bob';
myVariable = 'Étienne';
```
Declaration d'une classe en JavaScript

Description :

Exemple :
```js
let myVariable = 'Bob';
myVariable = 'Étienne';
```
Declaration d'un objet en JavaScript

Description :

Exemple :
```js
let myVariable = 'Bob';
myVariable = 'Étienne';
```
export en JavaScript

Description :
Il existe deux types d'export différents : les exports nommés et les exports par défaut. Il est possible d'avoir plusieurs exports nommés mais un seul export par défaut.

Exemple export nommé:
```js
// exporte une fonction déclarée précédemment
  export { maFonction };

  // exporte une constante
  export const machin = Math.sqrt(2)
```
Exemple export default (function):
```js
export default function() {}
```

SPREAD Operator en JavaScript

Description :
La syntaxe est de trois points (...) suivis du tableau (ou itérable*). Il développe le tableau en éléments individuels. Ainsi, il peut être utilisé pour étendre le tableau à des endroits où zéro ou plusieurs éléments sont attendus.

Exemple copier le tableau :
```js
let fruits = ['Apple','Orange','Banana'];

let newFruitArray = [...fruits];

console.log(copiedList); // ['Apple','Orange','Banana']
```
Exemple concaténer les tableau :
```js
let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']
```
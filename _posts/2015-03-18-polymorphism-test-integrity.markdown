---
layout: post
title:  "Polimorphism for better testability"
date:   2015-03-18 12:30:00 +0200
categories: review
---
Recently I listened to quite an old Miško Hevery presentation about refactoring conditional sentences with the help of polimorphism and inheritance for better testability.

In essence, this refactoring is done because of:
- conditional sentences reduce readability
- it is harded to test out code plaqued with conditionals
- it is eaer to maintain OOP based systems

The presentation uses empirical evidence such as layered conditionals, also known as *Pyramid of Doom*. Some of the branches (*else*s) are not meant to be used, testing such behemoths becomes a nuisance and maintenance requires changes in several locations.

[Groo's StackOverflow answer](https://stackoverflow.com/questions/1554180/why-is-the-if-statement-considered-evil/1554691#1554691) of why conditional sentences should not be used for every occasion, gives good insights as well.
It states that modularity increases readability and maintainability by avoiding clustering everything into a singlue unit.

Indeed, conditional sentences are inevitable when primitive types are compared.
Miško Hevery summarizes when should conditionals sentences be refactored:
 - if the way object behaves depends on its state
 - if condition has to be checked several times in multiple code locations

In conclusion, this presentation helped me understand when polimorphism should be used and how to tackle complex applications.

<iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://ytimg.googleusercontent.com/vi/4F72VULWFvc/0.jpg" frameborder="0" height="266" src="http://www.youtube.com/embed/4F72VULWFvc?feature=player_embedded" width="320"></iframe><br />
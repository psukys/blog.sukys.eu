---
layout: post
title:  "maršrutai.lt routes notifications"
date:   2012-12-23 21:38:00 +0200
categories: five-minute-crafts
---
![sample screenshot](https://i.imgur.com/DRImgDw.png)

Concept behind it is to see when busses/troleys leave a specific station towards specific target.
[Maršrutai.lt](http://old.marsrutai.lt) API serves SOAP, of which I need when and what bus/trolley comes to _my_ station. After obtaining wanted data, I preprocess and display as a notification periodically.

Main technologies behind are: `notify-send` for sending notifications and Java as a data puller.
The code is located [in github](https://github.com/psukys/ubuMarsrutai).


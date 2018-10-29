---
layout: post
title:  "Fake progress bar"
date:   2012-08-23 12:27:53 +0200
categories: five-minute-crafts
---
[![xkcd.com/303](https://imgs.xkcd.com/comics/compiling.png)](https://xkcd.com/303/)

This xkcd comic was the main motivation for imitating progress. I would like to share my snippet on it.

The setup is Linux based and is based on [zenity](https://help.gnome.org/users/zenity/), so having it installed is a prerequisite.

{% highlight bash %}
(for x in `seq 0 100`; do echo $x; sleep 1; done) | 
  zenity --progress --text="VERY IMPORTANT THINGS BE LOADING HERE"
{% endhighlight %}

![test](https://i.imgur.com/aOj7Cpv.png)

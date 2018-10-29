---
layout: post
title:  "Selected text reading via Google TTS"
date:   2015-03-18 13:17:00 +0200
categories: five-minute-crafts
---
Recently, during exam session, a lot of time was sprent reading scientific articles, excerpt from books and so on. Due to sheer amount of information coming through single sensory - eyes, I thought of using another sensory in hopes to better process the information. *Also that's a form of procrastination*.

One way of doing this is by transating textual representation into phonetic - Text To Speech software. While there's a bunch of TTS programs to choose from, I found out that Google TTS was exceptional of the options that I could access.

Immediate downside for Google TTS is that one needs internet connection, but *who doesn't nowadays?*

As ubiquitously popuar PDF (Portable Document Format) do not have text structured, but formatted and displayed in specific document location, it is rather difficult to generate audio. I remember there used to be paid software specifically for this task and even then one could not be certain that end result would be accurate.

One good find was that selected text is usually right for the task, as the person knows about the domain of interest, thus I decided to pipe selection to TTS.

## Recipe:
`xsel` - selected text manipulator
`python` - scripting language used
`python-pip` - package manager for Python
gTTS - Python library for Google TTS , installable through `pip`

## Usage
For convenience I assigned a keyboard-shortcut to execute the script

## Source
<script src="https://gist.github.com/psukys/4ba38de1f31ff37e49aa.js"></script>
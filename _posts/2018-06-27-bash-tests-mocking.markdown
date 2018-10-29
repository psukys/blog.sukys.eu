---
layout: post
title:  "Bash tests and mocking"
date:   2018-06-27 19:02:00 +0200
categories: five-minute-crafts
---
Recently I found myself in need to write tests in bash (running some executables and verifying output) and mocking some executables that I know will be used.


For this, I used cram testing framework, which is pretty straight forward. Each test file is compared to the following rules:
- Cram tests use the .t file extension.
- Lines beginning with two spaces, a dollar sign, and a space are run in the shell.
- Lines beginning with two spaces, a greater than sign, and a space allow multi-line commands.
- All other lines beginning with two spaces are considered command output.
- Output lines ending with a space and the keyword (re) are matched as Perl-compatible regular expressions.
- Lines ending with a space and the keyword (glob) are matched with a glob-like syntax. The only special characters supported are * and ?. Both characters can be escaped using \, and the backslash can be escaped itself.
- Output lines ending with either of the above keywords are always first matched literally with actual command output.
- Lines ending with a space and the keyword (no-eol) will match actual output that doesn't end in a newline.
- Actual output lines containing unprintable characters are escaped and suffixed with a space and the keyword (esc). Lines matching unprintable output must also contain the keyword.
- Anything else is a comment.

Sample test case, as provided by the repository:

<script src="https://gist.github.com/psukys/052684679eb52a159b8150e8d0c801fe.js"></script>


For command mocking, I override the PATH by issuing mock directory before actual path, for example mocking `sudo`, which is just a script that somehow handles the request:

{% highlight bash %}
$ [ `which sudo` = "${TESTDIR}/mocks/sudo" ] || PATH="${TESTDIR}/mocks:$PATH"
{% endhighlight %}

Here `TESTDIR` is an internal environment variable for cram.
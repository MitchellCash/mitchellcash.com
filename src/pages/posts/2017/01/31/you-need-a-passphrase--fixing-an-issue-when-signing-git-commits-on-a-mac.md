---
title: "You Need a Passphrase: Fixing an Issue When Signing Git Commits on a Mac"
date: "2017-01-31"
tags: [commit, git, GPG, signing]
---

It's been around in Git for a while, but since GitHub announced [support for signing commits](https://help.github.com/articles/signing-commits-using-gpg), and subsequently having those commits show as verified on GitHub, I had been keen to start signing my commits.

Before I could actually start signing my commits, there were a couple of steps I had to take. Firstly, I used [Homebrew](https://brew.sh) to `brew install gpg2`, to get GPG running on my machine, and secondly, I exported my keys from [Keybase](https://keybase.io), which is what I use to generate my keys, and then import them onto my machine locally for GPG to use.[^1]

Everything so far was okay, until I attempted to sign my first commit. Each time I entered `git commit -S` into the terminal, it would not prompt me for the passphrase to my key and instead fail with the following response:

```bash
$ git commit -S

You need a passphrase to unlock the secret key for
user: "Mitchell Cash <mitchell@mitchellcash.com>"
2048-bit RSA key, ID C6008DB5, created 2016-09-27

error: gpg failed to sign the data
fatal: failed to write commit object
```

I had expected (hoped) for this to work out of the box, but this wasn't going to be the case.

After some digging around the web it seemed the problem was related to `tty` and not setting the environment variable `GPG_TTY` correctly. So in order to resolve this problem you need first, make sure that `GPG_TTY` has been set to a real `tty` device, and second, export this environment variable. You can do this simply by entering the following commands into your terminal:

```bash
$ GPG_TTY=$(tty)
$ export GPG_TTY
```

or if you like one-liners:

```bash
$ export GPG_TTY=$(tty)
```

This solves the problem for our current session, but we want this to work between sessions as well. To do this you can add `export GPG_TTY=$(tty)` to your `.bash_profile` by copying the following into your terminal:

```bash
$ echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile
```

Hopefully this helps anyone running into issues with signing Git commits, and encourages you to continue using this feature.

[^1]: Keybase isn't the cause of the issue, it can still be present when generating keys locally using `gpg --gen-key`), but I mention Keybase as I have found a lot of common threads around from users of Keybase who face this issue.

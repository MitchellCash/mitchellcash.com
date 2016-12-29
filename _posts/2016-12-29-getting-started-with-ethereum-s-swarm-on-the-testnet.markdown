---
layout: default
title: Getting Started With Ethereum's Swarm on the Testnet
---

# {{ page.title }}

*This guide is focused on the Linux Ubuntu and Debian variants*

## What is Swarm?
Swarm is a distributed storage platform and content distribution service, a native base layer service of the Ethereum Web3 stack. The primary objective of Swarm is to provide a sufficiently decentralized and redundant store of Ethereum’s public record, in particular to store and distribute Ðapp code and data as well as block chain data. From an economic point of view, it allows participants to efficiently pool their storage and bandwidth resources in order to provide the aforementioned services to all participants.

From the end user’s perspective, Swarm is not that different from WWW, except that uploads are not to a specific server. The objective is to offer a peer-to-peer storage and serving solution that is DDOS-resistant, zero-downtime, fault-tolerant and censorship-resistant as well as self-sustaining due to a built-in incentive system which uses peer-to-peer accounting and allows trading resources for payment. Swarm is designed to deeply integrate with the ÐΞVp2p multiprotocol network layer of Ethereum as well as with the Ethereum blockchain for domain name resolution, service payments and content availability insurance (the latter is to be implemented in POC 0.4 by Q2 2017).

## Disclaimer

At the time of this writing, Swarm is still in alpha and should only be used at your own risk. The code is currently at proof of concept (POC) 0.2, see the Swarm [project roadmap](https://github.com/ethereum/go-ethereum/projects/6) for future development plans.

## Prerequisites

Install the Go programming language and Git

{% highlight shell %}
$ sudo apt-get install golang git
{% endhighlight %}

Create a directory to contain your workspace and set the GOPATH environment variable to point to that location

{% highlight shell %}
$ mkdir ~/go
$ export GOPATH="$HOME/go"
$ echo 'export GOPATH="$HOME/go"' >> ~/.profile
{% endhighlight %}

## Installation

Download the go-ethereum source code

{% highlight shell %}
$ mkdir -p $GOPATH/src/github.com/ethereum
$ cd $GOPATH/src/github.com/ethereum
$ git clone https://github.com/ethereum/go-ethereum
$ cd go-ethereum
$ git checkout master
$ go get github.com/ethereum/go-ethereum
{% endhighlight %}

Compile the go-ethereum client `geth` and the swarm daemon `swarm`

{% highlight shell %}
$ go install -v ./cmd/geth
$ go install -v ./cmd/swarm
{% endhighlight %}

Confirm Swarm is now installed

{% highlight shell %}
$ $GOPATH/bin/swarm version
{% endhighlight %}

## Preparing

Create an empty directory to be the data store

{% highlight shell %}
$ mkdir -p $HOME/Ethereum
$ DATADIR=$HOME/Ethereum
{% endhighlight %}

Make a new Ethereum testnet account using this directory

{% highlight shell %}
$ $GOPATH/bin/geth --testnet --datadir $DATADIR account new
{% endhighlight %}

You will now be prompted for a password. Once you have specified the password the output will be an address, which we will use as the base address of the swarm node. For this example let's assume the password was *SECRETPASSWORD* and the outputted address was:

{% highlight shell %}
$ Address: {df95eefa1630da7cfb7fbc14cbdc5c5c724e706b}
{% endhighlight %}

## Connecting

Run a `geth` node connected to the Ropsten testnet

{% highlight shell %}
$ nohup $GOPATH/bin/geth --datadir $DATADIR \
                         --unlock 0 \
                         --password <(echo -n "SECRETPASSWORD") \
                         --testnet \
                         --fast \
                         2>> $HOME/Desktop/ethereum/testnet/geth.log &
{% endhighlight %}

Launch `swarm` by connecting it to the `geth` node

{% highlight shell %}
$ $GOPATH/bin/swarm --bzzaccount df95eefa1630da7cfb7fbc14cbdc5c5c724e706b \
                    --datadir $DATADIR/testnet \
                    --keystore $DATADIR/testnet/keystore \
                    --ethapi $DATADIR/testnet/geth.ipc \
                    2>> $DATADIR/testnet/swarm.log < <(echo -n "SECRETPASSWORD") &
{% endhighlight %}

## Testing

You are now up and running with Swarm, so why not check out some content. The URL scheme is slightly different to what you may be used to, with the most popular URL scheme being `bzz`.

Some example sites:

* http://localhost:8500/bzz:/theswarm.test
* http://localhost:8500/bzz:/album.test
* http://localhost:8500/bzz:/1b5d887cea699d18560ae6dcaf06676f5064f630978b8031d9beb6fbddd82a82

## Upgrading

Stop any running `geth` or `swarm` services

{% highlight shell %}
$ killall -SIGINT $GOPATH/bin/geth $GOPATH/bin/swarm
{% endhighlight %}

Download the latest source code and recompile

{% highlight shell %}
$ cd $GOPATH/src/github.com/ethereum/go-ethereum
$ git checkout master
$ git pull
$ go install -v ./cmd/geth
$ go install -v ./cmd/swarm
{% endhighlight %}

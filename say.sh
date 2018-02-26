#!/bin/bash
p=/tmp/pico.wav
pico2wave -l=$2 -w=$p "$1"
play $p 2> /dev/null
rm $p

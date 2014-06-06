#!/usr/bin/python

import cgi

import cgitb

cgitb.enable()

file=open('pleasework.js','r')
graph=file.read()

print "Content-Type: text/html\n\n"
print ""
print graph



#!/usr/bin/python

import cgi
import os
import sys
import cgitb
from datetime import datetime


print "Content-Type: text/html\n\n"
print 

html = "<br>&nbsp;&nbsp;&nbsp;&nbsp;<input name='d1' type='text' id='calendar1'> to <input name='d2' type='text' id='calendar2' >&nbsp;<input type='submit' height=80 name='submit' value='Submit' onclick='Search(this)'>"

print html
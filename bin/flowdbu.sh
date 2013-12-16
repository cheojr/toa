#!/bin/bash
NAP_BIN_PATH=/opt/nap/bin
FILE=`date --date="10 minutes ago" "+/CassandraVol/flows/%Y/%Y-%m/%Y-%m-%d/ft-v05.%Y-%m-%d.%H%M**-0400"`
python $NAP_BIN_PATH/flows-db-update.py $FILE 2>> /tmp/flow-errors
python $NAP_BIN_PATH/flowsgrapher.py 2>> /tmp/flow-errors-grapher
python $NAP_BIN_PATH/p2p_graphic.cgi

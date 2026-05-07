@ECHO OFF
color 0a
Title Simple Python WebServer
REM ----------------------------------
REM CREATED: (March 2026)
REM ----------------------------------
ECHO Starting Python WebServer
python -m http.server 6969
explorer http://127.0.0.1:6969
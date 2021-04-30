@echo off

timeout 5 > NUL

tasklist | find "LogonUI.exe"

if %errorLevel% EQU 0 (
    echo Locked!
) else (
    echo Unlocked!
)
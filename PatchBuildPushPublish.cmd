@Echo Off

cd ./projects
FOR /d %%G in ("*") DO (call :patch "%%~nxG")

cd ../../

call ng build --prod

cd ./dist

FOR /d %%G in ("*") DO (call :publish "%%~nxG")
GOTO :eof

:patch
    echo Patche %1 auf
    cd %1
    call npm version patch
    GOTO :eof



:publish
    echo Publishe %1
    cd %1
    call npm publish
    GOTO :eof
echo "> Copying bundle to example/"

rm example/browser.js
cp dist/browser.js example/browser.js

rm example/styles.css
cp dist/styles.css ./example

echo "> Copying bundle complete."

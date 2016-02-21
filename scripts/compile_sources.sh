echo "> Transpiling Javascript to ES2015"
echo ""
babel --plugins "transform-runtime" lib --ignore __tests__ --out-dir ./dist
cd dist
browserify --debug -t [ exposify --expose [ --react React --react-dom ReactDOM] ] \
  -p [ css-modulesify -o styles.css ] ./browser_exposer.js > ./browser.js
cat ./browser.js | uglifyjs -c > ./browser.min.js
echo ""
echo "> Complete transpiling Javascript to ES2015"

mkdir lib
cd lib
wget -O Semantic-UI.zip https://github.com/Semantic-Org/Semantic-UI-CSS/archive/master.zip
wget -O Highcharts.zip https://code.highcharts.com/zips/Highcharts-10.2.0.zip
wget -O jquery.min.js https://code.jquery.com/jquery-3.6.0.min.js
wget -O palette.js https://raw.githubusercontent.com/google/palette.js/master/palette.js
unzip Semantic-UI.zip "Semantic-UI-CSS-master/*"
mv Semantic-UI-CSS-master semantic
rm Semantic-UI.zip
unzip Highcharts.zip "code/*"
mv code highcharts
rm Highcharts.zip

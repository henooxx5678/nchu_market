var caseBoxDemo = document.querySelector(".case-box");

// #theImage
// #name
// #like
// #price
// #quantity
// #state
// #publisher
// #publish_date
// #popularity

var jsonString01 =
    '{                                                       ' +
    '    "id": 0,                                            ' +
    '    "type": "sell-case",                                ' +
    '    "visible": true,                                    ' +
    '    "publisher": "Noboby",                              ' +
    '    "publishDate": "theDate",                           ' +
    '    "class": ["classLV1", "classLV2", "classLV3"],      ' +
    '    "commodity": {                                      ' +
    '        "image": null,                                  ' +
    '        "title": "name1",                               ' +
    '        "quantity": 1,                                  ' +
    '        "price": "100",                                 ' +
    '        "state": "state1",                              ' +
    '        "describe": "string~~~"                         ' +
    '    },                                                  ' +
    '    "counted": {                                        ' +
    '        "sold": 0,                                      ' +
    '        "popularity": 0,                                ' +
    '        "popularityYesterday": 0,                      ' +
    '        "like": 0                                       ' +
    '    }                                                   ' +
    '}                                                       ';

var jsonString02 =
    '{                                                        ' +
    '    "id": 1,                                             ' +
    '    "type": "buy-case",                                  ' +
    '    "visible": true,                                     ' +
    '    "publisher": "nobody",                               ' +
    '    "publishDate": "theDate",                            ' +
    '    "class": ["classLV1", "classLV2", "classLV3"],       ' +
    '    "commodity": {                                       ' +
    '        "image": null,                                   ' +
    '        "title": "name00",                               ' +
    '        "quantity": 1,                                   ' +
    '        "price": "free",                                 ' +
    '        "state": "all_new",                              ' +
    '        "describe": "hahaha"                             ' +
    '    },                                                   ' +
    '    "counted": {                                         ' +
    '        "got": 0,                                        ' +
    '        "popularity": 0,                                 ' +
    '        "popularityYesterday": 0,                        ' +
    '        "like": 0                                        ' +
    '    }                                                    ' +
    '}                                                        ';

var sellCaseSample = JSON.parse(jsonString01);
var buyCaseSample = JSON.parse(jsonString02);

var theCase = new Array();
var caseBox = new Array();

theCase[0] = sellCaseSample;
theCase[1] = buyCaseSample;

if (theCase.length > 0) {
    document.querySelector('#no-commodity-info').style.display = "none";
}
for (var i = 0; i < theCase.length; i++) {
    if (theCase[i].visible) {
        caseBox[i] = document.createElement('div');
        caseBox[i].className = "case-box";
        caseBox[i].style.display = "";
        caseBox[i].innerHTML = caseBoxDemo.innerHTML
        if (theCase[i].type == "sell-case") caseBox[i].classList.add("sell-case");
        if (theCase[i].type == "buy-case") caseBox[i].classList.add("buy-case");
        if (theCase[i].commodity.image == null) {
            caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#theImage', getDefaultImage(theCase[i].type));
        } else {
            caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#theImage', theCase[i].commodity.image);
        }
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#name', (theCase[i].type == "buy-case" ? "【徵】 " : "") + theCase[i].commodity.title);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#price', "價格： " + theCase[i].commodity.price);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#quantity', "數量： " + theCase[i].commodity.quantity);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#state', "使用程度： " + theCase[i].commodity.state);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#publisher', "發佈人： " + theCase[i].publisher);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#publish_date', "發佈日期： " + theCase[i].publishDate);
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#popularity', "昨日人氣： " + theCase[i].counted.popularityYesterday);
        var likeString = '<span class="like-label">關注</span>';
        if (theCase[i].counted.like < 100000) {
            likeString += ' <span class="like-value">' + theCase[i].counted.like + '</span>';
        } else {
            likeString += ' <span class="like-value">' + '爆' + '</span>';
        }
        caseBox[i].innerHTML = caseBox[i].innerHTML.replace('#like', likeString);

        document.querySelector(".case-container").innerHTML += caseBox[i].outerHTML;
        document.querySelector(".case-container").innerHTML += "<p></p>";
    }
}

function getDefaultImage(type) {
    return '<img src="' + type + '-default-image.jpg" alt="No Image" />';
}
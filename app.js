// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数

// function 関数名(引数){
   // 処理
// 　return 戻り値;
 // }
function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}
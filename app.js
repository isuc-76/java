// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand)

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');


// ランダムでじゃんけんの手を作成する関数

// function 関数名(引数){
   // 処理
// 　return 戻り値;
 // }
function getJShand(){
	var js_hand_num = Math.floor(Math.random() * 3 );

	if(js_hand_num == 0){
		js_hand = "グー";
	}
	else if(js_hand_num == 1){
		js_hand = "チョキ";
	}
	else if(js_hand_num == 2){
		js_hand = "パー";
	}
	return js_hand;
}


// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}
		else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}
		else if(js =="パー"){
			winLoseStr = "負け";
		}
	}

	else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}
		else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}
		else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}

	else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}
	else if(js == "チョキ"){
		winLoseStr = "負け";
		}
	else if(js == "パー"){
		winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}
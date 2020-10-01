triviaList = [
    "ハンガーを頭にかぶると勝手に首が回る。",
    "ドライブスルーは馬でも行ける。",
    "「PUMA」の創始者と「adidas」の創始者は兄弟である。",
    "ガチャピンにはモデルがいる。",
    "タモリとみのもんたは同じ誕生日である。",
    "アンデスメロンの「アンデス」とは「安心です」の略である。",
    "太刀魚は立って泳ぐ。",
    "18世紀ミイラは汽車の燃料に使われていた。",
    "水虫という虫がいる。",
    "アメリカにはホワイトハウスがあるが、アルゼンチンにはピンクハウスがある。",
    "鮭の名前の由来は身が「裂け」やすいからである。",
    "「髑髏」という漢字には簡単な覚え方がある。",
    "キリンビールの麒麟の絵には「キ」「リ」「ン」の文字が隠されている。",
    "カーネル・サンダースのメガネには度が入っている。",
    "タイの首都バンコクの正式名称は長い。",
    "キリンも「モ～」と鳴く。",
    "選挙員のおやつは1日500円までである。",
    "アメリカザリガニにサバをあげると青くなる。",
    "卓球の公式試合球は一つ完成するまでに半年かかる。",
    "放送中に自分がカツラであると告白したアナウンサーがいる。",
]

//トリビアをランダムに表示する
var random = Math.floor(Math.random() * (triviaList.length));

//へぇを鳴らす
function playSound() {
    var audio = new Audio('line-girl1-hee1.mp3');
    audio.play();
}

//へぇの回数を数える
var count = 0;
function countUp() {
    count++;
    document.getElementById("press-button").innerHTML = count;
    if (count == 100) {
        alert("満開！！");
    }
    else {
        document.getElementById("press-button").innerHTML = count;
        
    }
}

//最初のトリビアを表示する
document.getElementById("trivia").innerHTML = triviaList[random];

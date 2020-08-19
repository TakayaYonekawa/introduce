var card = document.querySelectorAll('.card'); // スライドで表示させる要素の取得
var cardRect = []; // 要素の位置を入れるための配列
var cardTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 100; // ちょっとはみ出させる部分

for(var i=0;i<card.length;i++){
    cardRect.push(card[i].getBoundingClientRect());
}
for(var i=0;i<cardRect.length;i++){
    cardTop.push(cardRect[i].top+windowY);
}
window.addEventListener('resize',function(){
    windowH=window.innerHeight;
});

window.addEventListener('scroll',function(){
    windowY=window.pageYOffset;
    for(var i=0; i<card.length;i++){
        if(windowY>cardTop[i]-windowH+remainder){
        card[i].classList.add('show');
        }else{
            card[i].classList.remove('show');
        }
    }
});

//全体フェードイン
const div = document.querySelector('div')

div.animate([{opacity: '0'}, {opacity: '1'}], 1500)


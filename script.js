// 怪しげな動き：スクロールに合わせて要素をジッターさせる
window.addEventListener('scroll', () => {
    const voices = document.querySelectorAll('.voice-item');
    voices.forEach(voice => {
        const position = voice.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
            voice.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`; //ジッターの範囲を小さくする
            voice.style.opacity = '1';
            voice.style.transition = 'all 0.3s ease-in-out'; //ジッターの速度を速くする
        }
    });
});

// 怪しげな動き：ヘッダーの文字を点滅＆色変化させる
setInterval(() => {
    const header = document.querySelector('header h1');
    header.style.opacity = header.style.opacity === '0.5' ? '1' : '0.5';
    header.style.color = header.style.color === 'white' ? 'red' : 'white';
}, 300);

// カウントダウン
const countdown = () => {
    let timeLeft = 30;
    const timeDisplay = document.getElementById('time');

    const timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
        } else {
            clearInterval(timer);
            timeDisplay.textContent = '終了！';
        }
    }, 1000);
};

countdown();

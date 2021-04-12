$('.openbtn').on('click',function(){//.btn_triggerをクリックすると
    $('.openbtn').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.nav-wrapper').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
   });

   if( $(window).width() < 768 ){//デバイスの幅が768以下のとき
    $('nav li>a').on('click',function(){//.nav-item>aをクリックすると
      $('.nav-wrapper').fadeOut(500);//.nav-wrapperが0.5秒でフェードアウト(メニューのフェードアウト)
      $('.openbtn').removeClass('close');//.btn_triggerのcloseクラスを削除
      $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
    });
  }


  $('nav a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
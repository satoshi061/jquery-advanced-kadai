$(function() {
  //ボタンアニメーション
  $('.button-more').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  //送信ボタンクリック時の処理
  $('#submit').on('click', (event) => {
    //formタグによる送信を拒否
    event.preventDefault();
    //入力チェックした結果をresultに格納
    let result = inputCheck();
    //エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;
    //エラーが無かったらフォーム送信
    if (error == false) {
      alert('お問い合わせを送信しました。');
    } else {
      alert(message);
    }
  });

  //フォーカスが外れた時(blur)にフォームの入力チェックをする
  $('#name').blur( () => {
    inputCheck();
  });
  $('#furigana').blur( () => {
    inputCheck();
  });
  $('#email').blur( () => {
    inputCheck();
  });
  $('#tel').blur( () => {
    inputCheck();
  });
  $('#message').blur( () => {
    inputCheck();
  });
  $('agree').click( () => {
    inputCheck();
  });

  //お問い合わせフォームの入力チェック
  function inputCheck() {
    //エラーのチェック結果
    let result;

    //エラーメッセージのテキスト
    let message = '';

    //エラーが無ければfalse、エラーがあればtrue
    let error = false;

    //お名前のチェック
    if ($('#name').val() == '') {
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      $('#name').css('background-color', '#fafafa');
    }

    //フリガナのチェック
    if ($('#furigana').val() == '') {
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      $('#furigana').css('background-color', '#fafafa');
    }

    //お問い合わせのチェック
    if ($('#message').val() == '') {
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      $('#message').css('background-color', '#fafafa');
    }

    //メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      $('#email').css('background-color', '#fafafa');
    }

    //電話番号のチェック（未入力はOK,未入力でない場合は-が必要)
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれておりません。\n';
    } else {
      $('#tel').css('background-color', '#fafafa');
    }

    //都道府県入力チェック
    if ($('#prefecture').val() == '') {
      $('#prefecture').css('background-color', '#f79999');
      error = true;
      message += '都道府県を選択してください。\n';
    } else {
      $('#prefecture').css('background-color', '#fafafa');
    }

    //個人情報チェックボックスのチェック
    if ($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }

    //エラーの有無で送信ボタンを切り替え
    if (error == true) {
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      $('#submit').attr('src', 'images/button-submit-blue.png');
    }

    //オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    //戻り値としてエラーがあるかどうか返す
    return result;
  }
});
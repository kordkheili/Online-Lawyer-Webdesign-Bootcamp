$(document).ready(function () {
  function equal_box_desktop_handler() {
    let mofid = $("#ws-equal-box-math").outerWidth();
    //let width_akoolad_right = $("#ws-akoolad-right").outerWidth(true);
    //let width_akoolad_left = $("#ws-akoolad-left").outerWidth(true);
    //let mofid = width - width_akoolad_right - width_akoolad_left;
    let width_word1 = $("#ws-word-1").outerWidth(true);
    let width_word2 = $("#ws-word-2").outerWidth(true);
    let width_word3 = $("#ws-word-3").outerWidth(true);
    let width_word4 = $("#ws-word-4").outerWidth(true);
    let width_left_col = Math.max(width_word2, width_word4);
    let width_right_col = Math.max(width_word1, width_word3);
    let width_both_col = width_left_col + width_right_col;
    let width_vasat = mofid - width_both_col;
    let width_equal_sign = $(".ws-equal").outerWidth(true);
    let width_vasat_final = width_vasat - width_equal_sign;

    $("#ws-line-1").width(
      width_right_col - width_word1 + width_vasat_final / 2
    );
    $("#ws-line-2").width(width_left_col - width_word2 + width_vasat_final / 2);
    $("#ws-line-3").width(
      width_right_col - width_word3 + width_vasat_final / 2
    );
    $("#ws-line-4").width(width_left_col - width_word4 + width_vasat_final / 2);
  }
  setInterval(equal_box_desktop_handler, 1000);
  $(window).resize(function () {
    equal_box_desktop_handler();
  });

  function equal_box_mobile_handler() {
    let ws_equal_box_mobile_right = $("#ws-equal-box-mobile-right").outerWidth(
      true
    );
    let ws_equal_box_mobile_left = $("#ws-equal-box-mobile-left").outerWidth(
      true
    );

    let width_akoolad_vertical =
      ws_equal_box_mobile_right / 2 + ws_equal_box_mobile_left / 2;

    $("#ws-akoolad-ofoghi-top").width(width_akoolad_vertical);
    $("#ws-akoolad-ofoghi-bottom").width(width_akoolad_vertical);
  }
  equal_box_mobile_handler();
  $(window).resize(function () {
    equal_box_mobile_handler();
  });

  function right_line_handler() {
    let top_gap = 40;
    let document_height = $(document).height();
    let width_window = $(window).width();
    let width_container = $("body .container").innerWidth();
    let right_border = (width_window - width_container) / 2 + 20;
    $("#ws-right-long-line").css({
      right: right_border,
      top: top_gap,
      height: document_height - top_gap,
    });
  }
  right_line_handler();
  $(window).resize(function () {
    right_line_handler();
  });

  //height handler :: line2
  //let subTitle_offset = $(".ws-tree-box-subTitle").offset();
  //let subTitle2_offset = $(".ws-tree-box-subTitle2").offset();
  // let tree_box_line2_height = Math.abs(
  //   subTitle_offset.top - subTitle2_offset.top
  // );
  //$(".ws-line-more2").css({ height: tree_box_line2_height });

  function line1_handler(line1) {
    //top handler :: line1
    let line1_top = 15;
    line1.css({ top: line1_top });

    //height handler :: line1
    let title_offset = line1.parent().offset();
    let subTitle_offset = line1
      .parent()
      .siblings(".ws-tree-box-subTitle")
      .offset();
    let line1_height = Math.abs(title_offset.top - subTitle_offset.top);
    line1.css({ height: line1_height });
    return {
      top: line1_top,
      height: line1_height,
    };
  }

  $.each($(".ws-line-more"), function () {
    line1_handler($(this));
  });

  $.each($(".ws-line-more2"), function () {
    let pesaramoo = $(this)
      .parent()
      .siblings(".ws-tree-box-title")
      .find(".ws-line-more");
    let line1_config = line1_handler(pesaramoo);
    //top handler :: line2
    let line1_top2 = line1_config.top + line1_config.height;
    $(this).css({ top: line1_top2 });

    //height handler :: line2
    let subTitle_offset = $(this).parent().offset();
    let subTitle2_offset = $(this)
      .parent()
      .siblings(".ws-tree-box-subTitle2")
      .offset();
    let line2_height = Math.abs(subTitle_offset.top - subTitle2_offset.top);
    $(this).css({ height: line2_height });
  });
});

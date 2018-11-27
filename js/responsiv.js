$(function (){
   num_step = 0;
   $('.next_btn').click(function (){
       $(window).scrollTop(0);
      if(num_step < 4){
        num_step = num_step + 1;
                // for desctop
                    // steps item display
                $('.form_wizard_steps_item').eq(num_step).
                        removeClass('form_wizard_steps_item_disable');
                $('.form_wizard_steps_item').eq(num_step).
                        addClass('form_wizard_steps_item_activ');
                $('.form_wizard_steps_item').eq(num_step).find('.status').
                        removeClass('status_disable');
                $('.form_wizard_steps_item').eq(num_step).find('.status').
                        addClass('status_activ');
                $('.form_wizard_steps_item').eq(num_step).find('.step_desc img').
                        attr('src','img/step_1.jpg');
                    // header form disply
                $('.form_wizard_content_header').eq(num_step - 1).
                        addClass('form_wizard_content_header_hidden');
                $('.form_wizard_content_header').eq(num_step).
                        removeClass('form_wizard_content_header_hidden');
                    // form display
                $('.form_wizard_content_form > div > form > div:visible').hide();
                $('.form_wizard_content_form > div > form > div').eq(num_step).show();
                
                // form mobile
                if($(window).width() <= 800){
                    $('.step_desc_mobile:visible').hide();
                    $('.step_desc_mobile').eq(num_step).show();
                }
            }
            
   });
   
   $('.pre_btn').click(function (){
       $(window).scrollTop(0);
      if(num_step > 0){ 
      num_step = num_step - 1;
      $('.form_wizard_steps_item').eq(num_step + 1).
            removeClass('form_wizard_steps_item_activ');
      $('.form_wizard_steps_item').eq(num_step + 1).
            addClass('form_wizard_steps_item_disable');
      $('.form_wizard_steps_item').eq(num_step + 1).find('.status').
            removeClass('status_activ');
      $('.form_wizard_steps_item').eq(num_step + 1).find('.status').
            addClass('status_disable');
      $('.form_wizard_steps_item').eq(num_step + 1).find('.step_desc img').
            attr('src','img/step_item_disable.jpg');
      // header form disply
                $('.form_wizard_content_header').eq(num_step + 1).
                        addClass('form_wizard_content_header_hidden');
                $('.form_wizard_content_header').eq(num_step).
                        removeClass('form_wizard_content_header_hidden');
                    // form display
                $('.form_wizard_content_form > div > form > div:visible').hide();
                $('.form_wizard_content_form > div > form > div').eq(num_step).show();
                
      // form mobile
      if($(window).width() <= 800){
        $('.step_desc_mobile:visible').hide();
        $('.step_desc_mobile').eq(num_step).show();
      }
  }
   });
   
   $('.form-control').focus(function (){
        $(this).attr('placeholder','');
        $(this).parent().parent().find('label').fadeIn("slow");
        $(this).parent().removeClass('input-group_blur');
        $(this).parent().addClass('input-group_focus');
   });
   
   $('.form-control').blur(function (){
        $(this).attr('placeholder',$(this).attr('data'));
        $(this).parent().parent().find('label').fadeOut();
        $(this).parent().removeClass('input-group_focus');
        $(this).parent().addClass('input-group_blur');
   });
   
   
});
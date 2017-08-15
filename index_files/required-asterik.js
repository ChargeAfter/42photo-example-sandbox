/* THIS SCRIPT TO ADD REQUIRED ASTERIK ON MVC INPUTS AND TEXTAREAS */

$(function() {
    $('form').each(function() {
        var $form = $(this);
        
        var elements = $(this).find('input[type=text],input[type=password], textarea, select');

        elements.each(function() {

            // check if element has required attribute.
            var req = $(this).attr('data-val-required') || $(this).data('required');

            if (undefined != req) { //if required
                //since MVC add for attribute to each label with same id of input. 
                //we will get that label and will add asterik to label.
                var label = $form.find('label[for="' + $(this).attr('id') + '"]');

                var text = label.text();
                //if label has text then add span with red colored asterik
                if (text.length > 0) {
                    label.append('<span style="color:red"> *</span>');
                }
            }
        });
    });
});
  


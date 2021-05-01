$('#mode').on('change', function() {
    var mode = $(this).val();
    if ( mode == 'bank' ) {
        $('.bank').show();
        $('.bitcoin').hide();
        $('.bitcoin input').removeAttr('required');
        $('.bank input').attr('required', 'true');
    }
    else if ( mode == 'bitcoin' ) {
        $('.bank').hide();
        $('.bitcoin').show();
        $('.bank input').removeAttr('required');
        $('.bitcoin input').attr('required', 'true');
    }
    else {
        $('.bank').show();
        $('.bitcoin').show();
        $('.bitcoin input').attr('required', 'true');
        $('.bank input').attr('required', 'true');
    }
})
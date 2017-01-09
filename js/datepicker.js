$(function(){
    $('#projects-container').on('focus', '.dateRangePicker', function(){
        $(this).datepicker({
            format: 'mm/dd/yyyy',
            startDate: '01/01/2016',
            endDate: '12/30/2020'
        })
    });
    $('#development-plans-container').on('focus', '.dateRangePicker', function(){
        $(this).datepicker({
            format: 'mm/dd/yyyy',
            startDate: '01/01/2016',
            endDate: '12/30/2020'
        })
    });
});
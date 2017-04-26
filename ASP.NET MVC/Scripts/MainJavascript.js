$(document).ready(function () {

    $('#btnShowCollapse').click(function () {
        $('#codeCollapse').collapse('show');
    });

    $('#btnHideCollapse').click(function () {
        $('#codeCollapse').collapse('hide');
    });

    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find('.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.glyphicon-menu-up').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
    });

    $('#btnExpandAll').click(function () {
        $('.panel-collapse.collapse').collapse('show');
    });

    $('#btnCollapseAll').click(function () {
        $('.panel-collapse.collapse.in').collapse('hide');
    });

    $('#btnTooltip').tooltip({
        placement: 'right',                         // display position
        title: '<h1>Tooltip with Bootstrap</h1>',   // tooltip
        animation: true,                            // face effect
        delay: { show: 300, hide: 100 },            // 300ms to show and 100ms hide; delay: 100 shows and hides in 100ms
        html: true
    });

    $('#tooltipInput').tooltip({
        trigger: 'manual'
    });

    $('#glyphTooltip').click(function () {
        $('#tooltipInput').tooltip('toggle');
    });

    $('#btnPopover').popover();

    $('#btnAlert').click(function () {
        setTimeout(function () {
            $('#divAlert').hide('fade');        // hides the divAlert with a fade animation
        }, 3000);                               // after 3000 ms

        $('#divAlert').show('fade');            // shows the divAlert on btnAlert click
    });

    $('#closeAlert').click(function () {
        $('#divAlert').hide('fade');           // hides the divAlert with a fade animation when clicking the X 
    });

    $('#imageCarousel').carousel();         // activates the carousel of the #imageCarousel

    $('#selStyleTable').change(function () {
        $('#selStyleTable option').each(function () {
            var value = $(this).val();
            switch (value) {
                case "0":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                    }
                    else {
                        $("#bsTable").removeClass("table");
                    }
                    break;
                case "1":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table table-striped");
                    }
                    else {
                        $("#bsTable").removeClass("table-striped");
                    }
                    break;
                case "2":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table table-bordered");
                    }
                    else {
                        $("#bsTable").removeClass("table-bordered");
                    }
                    break;
                case "3":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table table-hover");
                    }
                    else {
                        $("#bsTable").removeClass("table-hover");
                    }
                    break;
                case "4":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table table-condensed");
                    }
                    else {
                        $("#bsTable").removeClass("table-condensed");
                    }
                    break;
                case "5":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableDiv").addClass("table-responsive");
                    }
                    else {
                        $("#bsTableDiv").removeClass("table-responsive");
                    }
                    break;
                case "6":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableRowOne").addClass("active");
                    }
                    else {
                        $("#bsTableRowOne").removeClass("active");
                    }
                    break;
                case "7":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableRowTwo").addClass("info");
                    }
                    else {
                        $("#bsTableRowTwo").removeClass("info");
                    }
                    break;
                case "8":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableRowThree").addClass("success");
                    }
                    else {
                        $("#bsTableRowThree").removeClass("success");
                    }
                    break;
                case "9":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableRowFour").addClass("warning");
                    }
                    else {
                        $("#bsTableRowFour").removeClass("warning");
                    }
                    break;
                case "10":
                    if ($(this).is(':selected')) {
                        $("#bsTable").addClass("table");
                        $("#bsTableRowFive").addClass("danger");
                    }
                    else {
                        $("#bsTableRowFive").removeClass("danger");
                    }
                    break;
                default:
                    break;
            }
        });
    });
});

function changeBsHouseImageFloat() {
    $("#bsHouseImage").removeClass("pull-left center-block pull-right marginRight marginLeft");

    var value = $("#selBsHouseImageFloat").val();

    switch (value) {
        case "0":
            $("#bsHouseImage").addClass("pull-left marginRight");
            break;
        case "1":
            $("#bsHouseImage").addClass("center-block");
            break;
        case "2":
            $("#bsHouseImage").addClass("pull-right marginLeft");
            break;
        default:
    }
}

function changeBsHouseImageShape() {
    $("#bsHouseImage").removeClass("img-thumbnail img-rounded img-circle");

    var value = $("#selBsHouseImageShape").val();
    switch (value) {
        case "1":
            $("#bsHouseImage").addClass("img-circle");
            break;
        case "2":
            $("#bsHouseImage").addClass("img-rounded");
            break;
        case "3":
            $("#bsHouseImage").addClass("img-thumbnail");
            break;
        default:
    }
}

function selBsHouseImageResponsive() {
    if ($("#selBsHouseImageResponsive").is(':checked')) {
        $("#bsHouseImage").addClass("img-responsive");
    }
    else {
        $("#bsHouseImage").removeClass("img-responsive");
    }
}

function bsBlockquoteReverse() {
    if ($("#cbBsBlockquote").is(':checked')) {
        $("#bsBlockquote").addClass("blockquote-reverse");
    }
    else {
        $("#bsBlockquote").removeClass("blockquote-reverse");
    }
}

function changeBsBtnSize() {
    $("#bsBtnSize").removeClass("btn-xs btn-sm btn-lg");

    var value = $("#selBsSize").val();

    switch (value) {
        case "0":
            $("#bsBtnSize").addClass("btn-xs");
            break;
        case "1":
            $("#bsBtnSize").addClass("btn-sm");
            break;
        case "2":
            $("#bsBtnSize").addClass("btn-lg");
            break;
        default:
    }
}

function changeBsBtnGroupSize() {
    $("#bsBtnGroup").removeClass("btn-group-xs btn-group-sm btn-group-lg");
    $("#bsBtnGroup2").removeClass("btn-group-xs btn-group-sm btn-group-lg");

    var value = $("#selBsBtnGroupSize").val();

    switch (value) {
        case "0":
            $("#bsBtnGroup").addClass("btn-group-xs");
            $("#bsBtnGroup2").addClass("btn-group-xs");
            break;
        case "1":
            $("#bsBtnGroup").addClass("btn-group-sm");
            $("#bsBtnGroup2").addClass("btn-group-sm");
            break;
        case "2":
            $("#bsBtnGroup").addClass("btn-group-lg");
            $("#bsBtnGroup2").addClass("btn-group-lg");
            break;
        default:
    }
}

function changeBtnGroupAlignment() {
    if ($("#cbBsChangeBtnGroupAlignment").is(':checked')) {
        $("#bsBtnGroup").removeClass("btn-group-justified");
        $("#bsBtnGroup").addClass("btn-group-vertical");
        $('#cbBsChangeBtnGroupJustified').prop('checked', false);
    }
    else {
        $("#bsBtnGroup").removeClass("btn-group-vertical");
    }
}

function changeBtnGroupJustified() {
    if ($("#cbBsChangeBtnGroupJustified").is(':checked')) {
        $("#bsBtnGroup").addClass("btn-group-justified");
        $('#cbBsChangeBtnGroupAlignment').prop('checked', false);
    }
    else {
        $("#bsBtnGroup").removeClass("btn-group-justified");
    }
}

function changeDropDirection() {
    if ($("#cbChangeDropDirection").is(':checked')) {
        $("#divChangeDropDirection").addClass("dropup");
    }
    else {
        $("#divChangeDropDirection").removeClass("dropup");
    }
}

function changeFormLayout() {
    $("#bsForm").removeClass();
    $("#lbPassword").removeClass();
    $("#lbUser").removeClass();

    var value = $("#selChangeFormLayout").val();

    switch (value) {
        case "1":
            $("#bsForm").addClass("form-inline");
            break;
        case "2":
            $("#bsForm").addClass("form-horizontal");
            $("#lbPassword").addClass("control-label col-sm-2");
            $("#lbUser").addClass("control-label col-sm-2");
            break;
        default:
    }
}

function changeWellSize() {
    $("#divWell").removeClass();

    var value = $("#selWellSize").val();

    switch (value) {
        case "0":
            $("#divWell").addClass("well");
            break;
        case "1":
            $("#divWell").addClass("well well-sm");
            break;
        case "2":
            $("#divWell").addClass("well well-lg");
            break;
        default:
    }
}

function changeWellColor() {
    var value = $("#selWellColor").val();

    switch (value) {
        case "0":
            $("#divWell").css('background-color', '');
            break;
        case "1":
            $("#divWell").css('background-color', 'red');
            break;
        case "2":
            $("#divWell").css('background-color', 'green');
            break;
        case "3":
            $("#divWell").css('background-color', 'blue');
            break;
        default:
    }
}

function changePanelColor() {
    var value = $("#selPanel").val();
    $("#divPanel").removeClass();
    $("#divPanel").addClass("panel");

    switch (value) {
        case "0":
            $("#divPanel").addClass("panel-default");
            break;
        case "1":
            $("#divPanel").addClass("panel-info");
            break;
        case "2":
            $("#divPanel").addClass("panel-success");
            break;
        case "3":
            $("#divPanel").addClass("panel-primary");
            break;
        case "4":
            $("#divPanel").addClass("panel-warning");
            break;
        case "5":
            $("#divPanel").addClass("panel-danger");
            break;
        default:
    }
}

function changeBsPaginationSize() {
    $("#bsPagination").removeClass("pagination-sm pagination-lg");

    var value = $("#selPaginationSize").val();

    switch (value) {
        case "1":
            $("#bsPagination").addClass("pagination-sm");
            break;
        case "2":
            $("#bsPagination").addClass("pagination-lg");
            break;
        default:
    }
}
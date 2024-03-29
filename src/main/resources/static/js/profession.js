const url = "/api/professions/";
const form = $('.profession-details-form');
const modalTitle = $(".modal-title-label");
const modal = $('.add-profession-modal');
const table = $("#professionTable");

let datatableProfessionApi;

$(function () {
    datatableProfessionApi = table.DataTable({
        "paging": false,
        "info": false,
        "filter": false,
        "ajax": {
            url: url,
            dataSrc: '',
            method: 'GET'
        },
        "columns": [
            {data: "id"},
            {data: "name"},
            {data: "note"},
            {
                "render": renderEditBtn,
                "defaultContent": "",
                "orderable": false
            },
            {
                "render": renderDeleteBtn,
                "defaultContent": "",
                "orderable": false
            }
        ]
    })
});

function updateRow(id) {
    modalTitle.html("Edit");
    $.get(url + id, function (data) {
        $.each(data, function (key, value) {
            const findInput = form.find("input[name='" + key + "']");
            if (findInput.length !== 0) {
                findInput.val(value);
            } else {
                const findTextArea = form.find("textarea[name='" + key + "']");
                findTextArea.val(value);
            }
        });
        modal.modal();
    });
}

function save() {
    let data = form.serializeArray()
        .reduce(function(a, x) { a[x.name] = x.value; return a; }, {});
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(data)
    }).done(function () {
        modal.modal("hide");
        updateTable();
    })
}

function add() {
    modalTitle.html("Add");
    form.find(":input").val("");
    modal.modal();
}

function updateTableByData(data) {
    datatableProfessionApi.clear().rows.add(data).draw();
}

function deleteRow(id) {
    $.ajax({
        url: url + id,
        type: "DELETE"
    }).done(function () {
        updateTable();
    });
}

function updateTable() {
    $.ajax({
        type: "GET",
        url: url,
        dataSrc: ''
    }).done(updateTableByData);
}
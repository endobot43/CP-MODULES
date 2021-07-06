(function ($) {
    "use strict";
    
    /*Basic*/
    if ($('#jsGrid').length) {
        $('#jsGrid').jsGrid({
            height: "650px",
            width: "100%",
            filtering: true,
            editing: true,
            inserting: true,
            sorting: true,
            paging: true,
            autoload: true,
            pStoreSize: 10,
            pStoreButtonCount: 5,
            deleteConfirm: "Do you really want to delete the client?",
            controller: db,
            fields: [
                { name: "Device", type: "text", width: 65},
                { name: "Store", type: "number", width: 40 },
                { name: "Location", type: "text", width: 90 },
                { name: "Active", type: "checkbox", width: 25, title: "Active", sorting: false},
                { name: "Country", type: "select", width: 80, items: db.countries, valueField: "Id", textField: "Device" },
                { type: "control",  width: 40 }
            ]
        });
    }
    
    /*Static*/
    if ($('#jsGrid-static').length) {
        $('#jsGrid-static').jsGrid({
            height: "610px",
            width: "100%",
            sorting: true,
            paging: true,
            pStoreSize: 10,
            pStoreButtonCount: 5,
            data: db.clients,
            fields: [
                { name: "Device", type: "text", width: 65 },
                { name: "Store", type: "number", width: 40 },
                { name: "Location", type: "text", width: 90 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Active", type: "checkbox", width: 25, title: "Active" }
            ]
        });
    }
    
    /*Sorting*/
    if ($('#jsGrid-sorting').length) {
        $('#jsGrid-sorting').jsGrid({
            height: "610px",
            width: "100%",
            autoload: true,
            selecting: false,
            paging: true,
            pStoreSize: 10,
            pStoreButtonCount: 5,
            controller: db,
            fields: [
                { name: "Device", type: "text", width: 60 },
                { name: "Store", type: "number", width: 40 },
                { name: "Location", type: "text", width: 90 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Active", type: "checkbox", width: 25, title: "Active" }
            ]
        });
        $("#sort").click(function() {
            var field = $("#sortingField").val();
            $("#jsGrid-sorting").jsGrid("sort", field);
        });
    }

})(jQuery);
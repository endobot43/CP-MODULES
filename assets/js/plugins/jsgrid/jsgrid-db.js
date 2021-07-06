(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Device || client.Device.indexOf(filter.Device) > -1)
                    && (filter.Store === undefined || client.Store === filter.Store)
                    && (!filter.Location || client.Location.indexOf(filter.Location) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Active === undefined || client.Active === filter.Active);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    db.countries = [
        { Device: "All Countries", Id: 0 },
        { Device: "United States", Id: 1 },
        { Device: "Canada", Id: 2 },
        { Device: "United Kingdom", Id: 3 },
        { Device: "France", Id: 4 },
        { Device: "Brazil", Id: 5 },
        { Device: "Japan", Id: 6 },
        { Device: "Switzerland", Id: 7 },
        { Device: "India", Id:8 }
    ];

    db.clients = [
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61104,
            "Country": 3,
            "Location": "London: East End",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61141,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61351,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
                {
            "Device": "M440",
            "Store": 61123,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 01171,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 01311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "P400",
            "Store": 61104,
            "Country": 3,
            "Location": "London: Brick Lane",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440-1",
            "Store": 61109,
            "Country": 7,
            "Location": "Zurich: Edelweisesstrasse",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61311,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
                {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "m424",
            "Store": 66164,
            "Country": 3,
            "Location": "London: Knotting Hill",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M400-2",
            "Store": 51109,
            "Country": 7,
            "Location": "Zurich: Badenersstrasse",
            "Active": true
        },
        {
            "Device": "M400-1",
            "Store": 51109,
            "Country": 7,
            "Location": "Zurich: Badenersstrasse",
            "Active": true
        },
        {
            "Device": "M400-3",
            "Store": 51109,
            "Country": 7,
            "Location": "Zurich: Badenersstrasse",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61311,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
                {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61104,
            "Country": 3,
            "Location": "London: West End",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61311,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
                {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61104,
            "Country": 3,
            "Location": "London: West End",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440-2",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": true
        },
        {
            "Device": "M440-2",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61012,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "CM5",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "P400",
            "Store": 61131,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "P400",
            "Store": 61311,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "e280s",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "e280s",
            "Store": 59111,
            "Country": 1,
            "Location": "Haleakala: Crater",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "P400",
            "Store": 63101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61104,
            "Country": 3,
            "Location": "London: West End",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 1,
            "Location": "Los Angeles: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61311,
            "Country": 1,
            "Location": "Los Angeles: Century City",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61131,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62311,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61101,
            "Country": 1,
            "Location": "Manhattan: LES",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61104,
            "Country": 3,
            "Location": "London: West End",
            "Active": true
        },
        {
            "Device": "Carbon Mobile 5",
            "Store": 61105,
            "Country": 4,
            "Location": "Monte Carlo: South",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61109,
            "Country": 7,
            "Location": "Lausanne: Avenue De Cour",
            "Active": false
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 6,
            "Location": "Tokyo: Harajuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": false
        },
        {
            "Device": "M440",
            "Store": 61119,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 64131,
            "Country": 1,
            "Location": "San Francisco: Promenade",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 76211,
            "Country": 1,
            "Location": "Los Angeles: Carson",
            "Active": false
        },
        {
            "Device": "M440",
            "Store": 61113,
            "Country": 6,
            "Location": "Tokyo: Rapongi Hills",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 60259,
            "Country": 6,
            "Location": "Tokyo: Shinjuku",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61111,
            "Country": 1,
            "Location": "Honolulu: Ala Moana",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61155,
            "Country": 2,
            "Location": "Calgary: DT",
            "Active": false
        },
        {
            "Device": "M440",
            "Store": 67461,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 62781,
            "Country": 2,
            "Location": "BC: Vancouver",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 75131,
            "Country": 3,
            "Location": "Calgary: DT",
            "Active": true
        },
        {
            "Device": "M440",
            "Store": 61531,
            "Country": 2,
            "Location": "Calgary: NW",
            "Active": false
        },
        {
            "Device": "M440",
            "Store": 61331,
            "Country": 1,
            "Location": "Calgary: DT",
            "Active": true
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Device": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Device": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Device": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Device": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Device": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Device": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Device": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Device": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Device": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Device": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Device": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Device": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Device": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Device": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Device": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Device": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Device": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Device": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Device": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Device": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Device": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Device": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Device": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Device": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Device": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Device": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Device": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
     ];

}());
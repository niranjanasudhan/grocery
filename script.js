function show_data() {
    document.getElementById('gr_button').style.display = "none";
    document.getElementById('grocery').style.display = "block";
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var Parent = document.getElementById('grocery_table_tbody');
            while (Parent.hasChildNodes()) {
                Parent.removeChild(Parent.firstChild);
            }
            append_json(myObj);

        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}

function append_json(data) {
    var all = document.getElementById("all");
    var fv = document.getElementById("fv");
    var gp = document.getElementById("gp");
    var b = document.getElementById("b");
    all.classList.remove("active");
    fv.classList.remove("active");
    gp.classList.remove("active");
    b.classList.remove("active");
    all.classList.add("active");
    var table = document.getElementById('grocery_table_tbody');
    data.forEach(function(object) {

        var tr = document.createElement('tr');
        tr.innerHTML = '<td class="td_sl_no">' + object.sl_no + '</td>' +
            '<td class="td_name">' + object.name + '</td>' +
            '<td  class="td_qty">' + object.qty + '</td>' +
            '<td class="td_unit">' + object.unit + '</td>' +
            '<td  class="td_department">' + object.department + '</td>' +
            '<td  class="td_notes">' + object.notes + '</td>';
        table.appendChild(tr);
    });
}


function show_filter(val) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var Parent = document.getElementById('grocery_table_tbody');
            while (Parent.hasChildNodes()) {
                Parent.removeChild(Parent.firstChild);
            }

            append_json_filter(myObj, val);

        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}
var fil = "";

function append_json_filter(data, val) {
    var all = document.getElementById("all");
    var fv = document.getElementById("fv");
    var gp = document.getElementById("gp");
    var b = document.getElementById("b");
    all.classList.remove("active");
    fv.classList.remove("active");
    gp.classList.remove("active");
    b.classList.remove("active");

    if (val == "all") {
        fil = "all";
        all.classList.add("active");
    } else if (val == "fv") {
        fil = "Fruits/Veggies";
        fv.classList.add("active");
    } else if (val == "gp") {
        fil = "Grains/Pulses";
        gp.classList.add("active");
    } else if (val == "b") {
        fil = "Bakery";
        b.classList.add("active");
    }

    var table = document.getElementById('grocery_table_tbody');
    data.forEach(function(object) {

        var tr = document.createElement('tr');
        if (fil == "all") {

            tr.innerHTML = '<td class="td_sl_no">' + object.sl_no + '</td>' +
                '<td class="td_name">' + object.name + '</td>' +
                '<td  class="td_qty">' + object.qty + '</td>' +
                '<td class="td_unit">' + object.unit + '</td>' +
                '<td  class="td_department">' + object.department + '</td>' +
                '<td  class="td_notes">' + object.notes + '</td>';
            table.appendChild(tr);
        } else if (fil == object.department) {

            tr.innerHTML = '<td class="td_sl_no">' + object.sl_no + '</td>' +
                '<td class="td_name">' + object.name + '</td>' +
                '<td  class="td_qty">' + object.qty + '</td>' +
                '<td class="td_unit">' + object.unit + '</td>' +
                '<td  class="td_department">' + object.department + '</td>' +
                '<td class="td_notes">' + object.notes + '</td>';
            table.appendChild(tr);
        }


    });
}
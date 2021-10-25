(function () {
    var Person = {
        Name: "",
        Date: "",
        Points:"",
    };


    var applogic = {

        clearuielements: function () {
            var inputs = document.getElementsByClassName("record-input");
            for (i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        },

        saveitem: function () {
            var lscount = localStorage.length;
            var inputs = document.getElementsByClassName("record-input");
            Person.Name = inputs[0].value;
            Person.Date = inputs[1].value;
            Person.Points = inputs[2].value;
            localStorage.setItem("Person_" + lscount, JSON.stringify(Person));
            location.reload();
        },

        loaddata: function () {
            var datacount = localStorage.length;
            if (datacount > 0)
            {
                var render = "<table border='0' width='445px' align='center'>";
                render += "<tr><th><font color='#FFFFFF'>Name</font></th><th><font color='#FFFFFF'>Date</font></th><th><font color='#FFFFFF'>Score</font></th></tr>";
                for (i = 0; i < datacount; i++) {
                    var key = localStorage.key(i);
                    var person = localStorage.getItem(key);
                    var data = JSON.parse(person);

                    render += "<tr><td><font color='#FFFFFF'>" + data.Name + "</font></td>";
                    render += "<td><font color='#FFFFFF'>" + data.Date + "</font></td>";
                    render += "<td><font color='#FFFFFF'>" + data.Points + "</font></td>";
                }
                render+="</table>";
                dvcontainer.innerHTML = render;
            }
        },

        clearstorage: function () {
            var storagecount = localStorage.length;
            if (storagecount > 0)
            {
                for (i = 0; i < storagecount; i++) {
                    localStorage.clear();
                }
            }
            window.location.reload();
        }
    };

    var btnsave = document.getElementById('btnsave');
    btnsave.addEventListener('click', applogic.saveitem, false);

    var btnclear = document.getElementById('btnclear');
    btnclear.addEventListener('click', applogic.clearuielements, false);

    var btnclearstorage = document.getElementById('btnclearstorage');
    btnclearstorage.addEventListener('click', applogic.clearstorage, false);

    window.onload = function () {
        applogic.loaddata();
    };
})();
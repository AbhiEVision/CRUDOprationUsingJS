function StoreData(data) {
    if (GetItems() != null) {
        const fileData = GetItems();
        fileData.push(data);
        SetItems(fileData);
    } else {
        const x = [data];
        SetItems(x);
    }
}


function GetItems() {
    //console.log(JSON.parse(localStorage.getItem("data")));
    return JSON.parse(localStorage.getItem("data"));
}

function SetItems(data) {
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(data));
    //console.log("Stored Data" + data);
}

function RetriveData() {
    return GetItems();
}

function ClearDatabase() {
    localStorage.clear();
    ShowDataInTable();
}

function DeleteItemByID(uniqeId) {
    const data = GetItems();
    if (data != null) {
        for (let i = 0, len = data.length; i < len; i++) {
            if (data[i].id == uniqeId) {
                data.splice(i, 1);
                break;
            }
        }
    }
    SetItems(data);
}

function GiveDataByID(uniqeID) {
    const data = GetItems();
    if (data != null) {
        for (let i = 0, len = data.length; i < len; i++) {
            if (data[i].id == uniqeID) {
                return data[i];
            }
        }
    }
    return null;
}

function UpdateDataByID(x) {
    const data = GetItems();
    if (data != null) {
        for (let i = 0, len = data.length; i < len; i++) {
            if (data[i].id == x.id) {
                data[i].name = x.name;
                data[i].price = x.price;
                data[i].desc = x.desc;
                if (x.image != data[i].image && x.image != null && x.image != "") {
                    data[i].image = x.image;
                }
                break;
            }
        }
    }
    SetItems(data);
}
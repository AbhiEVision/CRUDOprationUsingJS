function imageUploaded() {
    var file = document.querySelector('#PImage')['files'][0];

    var reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result;
        imageString = base64String;
    }
    reader.readAsDataURL(file);
}

function OpenForm(x) {
    if (x) {
        noramlForm.btn1.style.display = "inline-block";
        noramlForm.btn2.style.display = "inline-block";
        noramlForm.btn3.style.display = "none";

    } else {
        noramlForm.btn1.style.display = "none";
        noramlForm.btn2.style.display = "none";
        noramlForm.btn3.style.display = "inline-block";
    }
    FORM.style.display = "flex";
    GeneratePID();
    DoBlur();

}

function DoBlur() {
    for (let i = 0, len = blurThis.length; i < len; i++) {
        blurThis[i].setAttribute("class", "blur");
    }
}

function BlurRemove() {
    for (let i = 0, len = blurThis.length; i < len; i++) {
        blurThis[i].removeAttribute("class", "blur");
    }
}

function GeneratePID() {
    PID.value = (new Date()).getTime();
}

function CloseForm() {
    FORM.style.display = "none";
    ClearForm();
    BlurRemove();
    ShowDataInTable();
}

function ClearForm() {
    FORMELEMENTS.ProductName.value = "";
    FORMELEMENTS.ProductPrice.value = "";
    FORMELEMENTS.ProductImage.value = "";
    FORMELEMENTS.ProductDiscription.value = "";
}

function AddProduct() {
    const pid = GetProductID(),
        pname = GetProductName(),
        pdesc = GetProductDescription(),
        pimage = GetProductImage(),
        pprice = GetProductPrice();

    if(pname == ""){
        alert("Enter Name Properly");
    } else if(pimage == ""){
        alert("Please select file");
    }else if(pprice == ""){
        alert("Please insert Price");
    } else if(pdesc == ""){
        alert("Please Enter Proper Description")
    }else {
        const data = { id: pid, name: pname, image: pimage, desc: pdesc, price: pprice }
        StoreData(data);
        ShowDataInTable();
        ClearForm();
        CloseForm();
        imageString = "";
    }
}

//Getter Methods

function GetProductID() {
    return FORMELEMENTS.ProductID.value.toString();
}
function GetProductName() {
    return FORMELEMENTS.ProductName.value.toString();
}

function GetProductImage() {
    return imageString;
}

function GetProductPrice() {
    return FORMELEMENTS.ProductPrice.value.toString();
}

function GetProductDescription() {
    return FORMELEMENTS.ProductDiscription.value.toString();
}

function Delete(X) {
    console.log("called")
    console.log(Number());
    DeleteItemByID(Number(X));
    ShowDataInTable();
}

function Edit(x) {
    OpenForm(false);
    const data = GiveDataByID(x);
    SetDataIntoForm(data);
}

function SetDataIntoForm(data) {
    FORMELEMENTS.ProductName.value = data.name;
    FORMELEMENTS.ProductPrice.value = data.price;
    FORMELEMENTS.ProductDiscription.value = data.desc;
    FORMELEMENTS.ProductID.value = data.id;
}

function UpdateProduct() {
    const pid = GetProductID(),
        pname = GetProductName(),
        pdesc = GetProductDescription(),
        pimage = GetProductImage(),
        pprice = GetProductPrice();

    const data = { id: pid, name: pname, image: pimage, desc: pdesc, price: pprice }

    UpdateDataByID(data);
    ShowDataInTable();
    ClearForm();
    CloseForm();

}

function GenerateDummyData(len) {
    for (let i = 0; i < len; i++) {
        console.log(i);
        const id = i.toString();
        const name = genRandonString(10);
        const desc = genRandonString(30);
        const image = getImage();
        const price = Math.floor((Math.random() * 10000) + 1);
        const data = { id: id, name: name, image: image, desc: desc, price: price }
        StoreData(data);
    }
    ShowDataInTable();
}

function genRandonString(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charLength = chars.length;
    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

function getImage() {
    return "data:image/jpeg;base64,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";

}

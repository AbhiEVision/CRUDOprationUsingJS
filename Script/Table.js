function ShowDataInTable(sortedData){
    let data = RetriveData();
    if(sortedData != null){
        data = sortedData;
    }
    if(data == null){
        Table.innerHTML = "";
        nothingText.style.display = "flex";
    } else {
        nothingText.style.display = "none";
        let html = "";
        for(let i= 0,len = data.length; i <len; i++){
            html += `
            <tbody>
            <tr class="table-row">
                <td class="table-id">
                    ${data[i].id}
                </td>
                <td class="table-name">
                    ${data[i].name}
                </td>
                <td class="table-image">
                    <img src="${data[i].image}">
                </td>
                <td class="table-desc">
                    ${data[i].desc}
                </td>
                <td class="table-price">
                    ${data[i].price}
                </td>
                <td class="table-buttons">
                    <button class="table-btn" value="${data[i].id}" onclick="Edit(this.value)"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="table-btn" value="${data[i].id}" onclick="Delete(this.value)"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            </tbody>`
        }
        Table.innerHTML = html;
    }
}
ShowDataInTable();

function FilterByPrice(){
    const data = GetItems();
    if(data != null || data != undefined){
    data.sort((a,b)=>{
        if(a.price < b.price){
            return -1;
        } else if(a.price > b.price){
            return 1;
        }
        return 0;
    })

    ShowDataInTable(data);}
}

function FilterByName(){
    const data = GetItems();
    if(data != null || data != undefined){
        data.sort((a,b)=>{
            if(a.name.toLowerCase() < b.name.toLowerCase()){
                return -1;
            } else if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
            }
            return 0;
        })
        ShowDataInTable(data);
    }
    
}

function FilterByID(){
    const data = GetItems();
    if(data != null || data != undefined){
    data.sort((a,b)=>{
        if(Number(a.id) < Number(b.id)){
            return -1;
        } else if(Number(a.id) > Number(b.id)){
            return 1;
        }
        return 0;
    })
    ShowDataInTable(data);}
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

function SearchElement(){
    const x = SearchBar.value;
    const data = GetItems();
    let UpdatedData = [];

    UpdatedData = data.filter(ele => ele.name.toLowerCase().includes(x.toLowerCase()) || ele.id.includes(x));
    ShowDataInTable(UpdatedData);

}

const processChange = debounce(() => SearchElement());

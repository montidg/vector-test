
let toolData = {
    run: ({ selectedItems, innerGroup }) => { 
        let item = selectedItems.filter(item => !(!item.children || item.className != 'Group' || item == innerGroup))[0];

        if (!item) return;
        item.selected = false;

        let index = item.index;
        while (item.firstChild) {
            innerGroup.insertChild(index,item.firstChild);
            index = item.index;
        }
        
    }
}

export { toolData };
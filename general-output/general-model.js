
export default class GeneralModel{
    url = 'webshop_clothes.csv';

    constructor(){
       
    }

    sortValues = {
        "Id": "id",
        "Product name": "product_name",
        "Price usd": "price_usd",
        "Size": "size",
    }

    loadData = () =>{
        return fetch(this.url)
        .then(data=>data.text())
        .then(dataAsText=>{
            let result = dataAsText.split('\r\n');
            let properties = result.shift().split(',');
            
            this.data = result.map(row=>row.split(',').reduce((acc,item,i)=>{
                acc[properties[i]] = item;
                return acc;
            }, {}));
            
            return this.data;
        });
    }

    loadProperties = () =>{
        
        return fetch(this.url)
        .then(data=>data.text())
        .then(dataAsText=>{
            let result = dataAsText
            .split('\r\n');

            [,...this.properties] = result
            .shift()
            .split(',');
            
            return this.properties;
        });
       
    }

    sortBy = (type) =>{
        if(type == 'Size'){
            const weights = {//rules
                'XS':1, 
                 'S':2, 
                 'M':3, 
                 'L':4,
                 'XL':5, 
                 'XXL':6
             };
            
            const sortName = this.sortValues[type];
            //lets try to filter and reduce to two arrays - one of strings one of ints
            let itemsSizesInNums = [];
            let itemsSizesInStr = [];
    
            this.data.forEach(item=>{
                let value = parseFloat(item[sortName]);
                if(Number.isNaN(value)){
                    itemsSizesInStr.push(item);
                }else{
                    itemsSizesInNums.push(item);
                }
            });
    
            itemsSizesInNums.sort((a,b)=>parseFloat(a[sortName]) - parseFloat(b[sortName]));
            itemsSizesInStr.sort((a,b)=>weights[a[sortName]] - weights[b[sortName]]);
            
            this.data = itemsSizesInNums.concat(itemsSizesInStr);
            
    
            return this.data;

            // this.data.sort((a,b)=>{
            //     const valueA = Number.isNaN(parseFloat(a[sortName])) ? weights[a[sortName]]: a[sortName];
            //     const parsedValueA = parseFloat(valueA);

            //     const valueB= typeof b[sortName] === 'string' ? weights[b[sortName]]: b[sortName];
            //     const parsedValueB = parseFloat(valueB);

            //     return parsedValueA - parsedValueB;
            // });

            // return this.data;
            
        }
        
    }

    
}
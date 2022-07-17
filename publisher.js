export default class Publisher{
    subscribers = {};

    events = {
        SORT_ITEMS_BY: 'SORT_ITEMS_BY',
        

    };
    
    subscribe(eventName, callbc){
        if(!this.subscribers[eventName]){
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(callbc);


    }

    notifySubscribers(eventName, data){
        if(!this.subscribers[eventName]){
            this.subscribers[eventName] = [];
        }

        this.subscribers[eventName].forEach(cback=>cback(data));
    }
}
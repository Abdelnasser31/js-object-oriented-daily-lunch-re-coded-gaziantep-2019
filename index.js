// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let mealId = 0,
    customerId = 0,
    deliveryId = 0,
    neighborhoodId = 0;
    

class Neighborhood {
   constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  }
  deliveries() {
    return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
  }
  customers() {
   return store.customers.filter(customer => customer.neighborhoodId ===  this.id);
  }
  meals() {
    return this.deliveries().map(delivery => delivery.meal());
  }
}   
    

class Customer {
   constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this)
   }
    
   deliveries() {
    return store.deliveries.filter(delivery => delivery.customerId === this.id);
  }
  totalSpent() {
    // return totalSpent 
  }
  meals() {
    return  this.deliveries().map(delivery => delivery.meal());
  }
  }

    
class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }
  customers() {
    return this.deliveries().map(delivery => delivery.customer());
  }
  deliveries() {
    return store.deliveries.filter(delivery => delivery.mealId === this.id);
  }
  static byPrice() {
    return sotre.meals.sort( (a,b) => a.price - b.price);
  }
}
class Delivery {
   constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }
  meal() {
    return store.meals.find(meal => meal.id === this.mealId);
  }
 customer() {
   return store.customers.find(customer => customer.id === this.customerId);
 }
  neighborhood() {
    return store.neighborhoods.find(nb => nb.id === this.neighborhoodId);
  }
}



import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public subCategory: any;
  public catId: any;
  public products: any;
  public _image_url =  'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService, private route : ActivatedRoute) {
    this.catId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.dataService.getSubCategories(this.catId).subscribe(x => this.subCategory = x.data)

    this.dataService.getProducts(1).subscribe(x => this.products = x.data)
  }
  onSelectSubCategory(subId){
    console.log(subId);
    this.dataService.getProducts(subId).subscribe(x => this.products = x.data)
  }
  addToCart(product){
    if(localStorage.cart == undefined){
      console.log(product)
      var cartItems = []
      cartItems.push(product);
      localStorage.cart = JSON.stringify(cartItems);
    }
    else{
      var product1 = JSON.parse(localStorage.cart);
      product1.push(product);
      localStorage.cart = JSON.stringify(product1);
    }
    
  }
}

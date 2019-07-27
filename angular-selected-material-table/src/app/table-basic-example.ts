import { Component,ViewChild } from '@angular/core';
//import {SelectionModel} from '@angular/cdk/collections';
//import {MatTableDataSource} from '@angular/material/table';


/**
 * @title Basic table
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['Toppings', 'checkSmall', 'checkMedium', 'checkLarge','checkELarge'];
  //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  dataSource = ELEMENT_DATA;
  //selection = new SelectionModel<Element>(true, []);


  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
  @ViewChild('ref') ref;
    checked: boolean = true;

onChange(event) {
  // console.log('index',this.dataSource.data.find(eve) .data.indexOf(event.checkSmall)); 
      
console.log('small', +event.checked);
  }
onChange1(event) {
  // console.log('index',this.dataSource.data.find(eve) .data.indexOf(event.checkSmall)); 
      
console.log('medium', +event.checked);
  }
}

export interface Element {
  Toppings: string;
  checkSmall: boolean;
  checkMedium: boolean;
  checkLarge: boolean;
  checkELarge: boolean;
  highlighted?: boolean;
  hovered?: boolean;
  
}

const ELEMENT_DATA: Element[] = [
  {Toppings: 'Tomatoes($1.00)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Onions($0.50)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Bell pepper($1.00)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Mushrooms($1.20)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Pineapple($0.75)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Sausage($1.00)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Pepperoni($2.00)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false},
  {Toppings: 'Barbecue chicken($3.00)',checkSmall:false,checkMedium:false,checkLarge:false,checkELarge:false}
  ];


  
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

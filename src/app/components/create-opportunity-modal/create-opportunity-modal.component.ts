import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../../dataService/customer.service';
import {ProductService} from '../../dataService/product.service';

@Component({
  selector: 'app-create-opportunity-modal',
  templateUrl: './create-opportunity-modal.component.html',
  styleUrls: ['./create-opportunity-modal.component.scss']
})
export class CreateOpportunityModalComponent implements OnInit, OnDestroy {
  closeResult = '';
  customers = null;
  products = null

  constructor(private modalService: NgbModal, private customerService: CustomerService, private productService: ProductService) {}

  ngOnInit() {
    this.listCustomers();
    this.listProducts();
  }

  ngOnDestroy(): void {
  }

  listCustomers() {
    this.customerService.listCustomers().subscribe((res: any) => {
      this.customers = res.data;
    });
  }

  listProducts() {
    this.productService.listProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  save() {}
}

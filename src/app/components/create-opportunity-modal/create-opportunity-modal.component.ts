import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../../dataService/customer.service';
import {ProductService} from '../../dataService/product.service';
import {OpportunitiesService} from '../../dataService/opportunities.service';

@Component({
  selector: 'app-create-opportunity-modal',
  templateUrl: './create-opportunity-modal.component.html',
  styleUrls: ['./create-opportunity-modal.component.scss']
})
export class CreateOpportunityModalComponent implements OnInit, OnDestroy {
  closeResult = '';
  customers = null;
  products = null;
  customerId = 0;
  productId = 0;
  @Output() output = new EventEmitter();

  constructor(private modalService: NgbModal, private customerService: CustomerService, private productService: ProductService,
              private opportunityService: OpportunitiesService) {}

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
    }, (reason) => {
    });
  }

  save() {
    console.log(this.customerId, this.productId)
    this.opportunityService.storeOpportunity(this.customerId, this.productId).toPromise().then(() => {
      this.output.emit();
      this.modalService.dismissAll();
    })
  }
}

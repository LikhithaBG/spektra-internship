import { Component} from '@angular/core';
import { ProsService } from '../pros.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})

  export class ProdComponent {
    prodComponents: any[] | undefined;
  
    constructor(private ProsService: ProsService) {} // extends 

    displaypros() {
      this.prodComponents = this.ProsService.getpros();
    }

}

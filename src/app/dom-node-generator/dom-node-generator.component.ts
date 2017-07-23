import { Component, OnInit, Input } from '@angular/core';
import { DngService } from './serviсe/dng.service';
import { IDomNode } from './idom-node';


@Component({
  selector: 'dom-node-generator',
  template: '<div [innerHTML] = "element">{{element}}</div>',
  styleUrls: ['./dom-node-generator.component.css'],
  providers: [ DngService ]
})
export class DomNodeGeneratorComponent implements OnInit {
 
  @Input() httpUrl: string;    
  domNode: IDomNode;
  element: string;

  constructor(private dngService: DngService) { 
  
  }

  ngOnInit() {
      this.dngService.loadModel(this.httpUrl).subscribe(response=>{
                this.domNode=response;
                let attributes: string;
               
                 this.element=this.domNode.content.map(function(item){
                   attributes="";
                    for (var key in item.attributes){
                        attributes += key+ '="'+item.attributes[key]+'" ';   
                    }
                    
                    return  "<"+item.tag+" "+attributes+">"+"as</"+item.tag+">";
                }).join(" ");
                 console.log(this.element);
      });

  }

}

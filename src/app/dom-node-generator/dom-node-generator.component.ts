import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { DngService } from './serviсe/dng.service';
import { IDomNode } from './idom-node';
import { DynamicElementComponent } from '../dynamic-element/dynamic-element.component';


@Component({
  selector: 'dom-node-generator',
  template: '<input type="button" value="Generate" (click)="init()"><div #container></div>',
  providers: [ DngService ]
})
export class DomNodeGeneratorComponent implements OnInit {
 
  @Input() httpUrl: string;    
  domNode: IDomNode;
  loadStatus: boolean = false;
  htmlTags: string= "";
  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(
    private dngService: DngService, 
    private resolver: ComponentFactoryResolver,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit() {
    this.loadModel();
  }

  loadModel(): void{
       this.dngService.loadModelService(this.httpUrl).subscribe(response=>{this.domNode=response; this.loadStatus=true});  
  }

  init():void{

    if(!this.loadStatus){
            alert("The model is not yet loaded");
            return;
    }
    this.createComponent(this.createHtmlTemplate(this.domNode));
    this.destroy(); 
   }

  createHtmlTemplate(value: IDomNode):string{

      if(value instanceof Array) {
          for (var key in value){
            this.htmlTags +=this.createElement(value[key]);
          }
       }else{
            this.htmlTags +=this.createElement(value);
       }
        return this.htmlTags;  
  }

  createElement(value):string {

      let element : string="";
      let attributes: string="";
      let text: string="";
      let content: string="";

        if('attributes' in value){
              for (var key in value.attributes){
                      attributes +=" "+ key+ '="'+value.attributes[key]+'"';   
              }
        }
       
        if('text' in value){
            text = value.text;
        }

        if('content' in value){
            content =  this.createHtmlTemplate(value.content);
        }

        if('tag' in value){
            element = "<"+value.tag+attributes+">"+text+content+"</"+value.tag+">";
        }else{
            element = text;
        }

      return  element;
  } 

  createComponent(htmlTemplate:string):void{
       const dynamicElementFactory = this.resolver.resolveComponentFactory(DynamicElementComponent)
       const dynamicElementRef = this.container.createComponent(dynamicElementFactory);
       dynamicElementRef.instance.htmlTemplate = this.sanitizer.bypassSecurityTrustHtml(htmlTemplate);
  }

  destroy():void{
     this.htmlTags=""; 
  }

}

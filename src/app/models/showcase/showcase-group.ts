import {Product} from '../product/product';

export class ShowcaseGroup{
    id: string;
    code: string;
    name: string;
    position: number;
    picture: string;
    metaTagTitle: string;
    metaTagDescription: string;
    products: Product[];

    // constructor(object = null){
    //     if(object) return this.CreateFromResponse(object);
    // }

    // CreateFromResponse(object){
    //     let model = new ShowcaseGroup();

    //     for(var k in object){
    //         if(k == 'products'){
    //             model.products = object.products.map(p => p = new Product(p));
    //         }
    //         else{
    //             model[k] = object[k];
    //         }
    //     }
    //     return model;
    // }
}
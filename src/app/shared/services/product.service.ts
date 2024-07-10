 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL = `${environment.BASE_URL}/products`; 
 
  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAllProductsInCatlog() {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpClient.get(this.BASE_URL , httpOptions);
  }

  /**
   * 
   * @param companyId 
   * @returns 
   */
  getAllProductsInCatlogById(companyId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${companyId}`, httpOptions);
  }


  
   /**
   * 
   * @param companyId 
   * @returns 
   */
   getAllProductsInCatlogBySlug(slug : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(`${this.BASE_URL}/${slug}`, httpOptions);
  }


  /**
   * 
   * @param companyId 
   */
  addNewProduct(companyData : any) {
    let payload = JSON.stringify(companyData);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.post(this.BASE_URL, payload, httpOptions);
  }

  /**
   * 
   * @param companyId 
   * @param companyData 
   */
  updateProduct(companyId : string , companyData : any) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.put(this.BASE_URL + companyId , companyData, httpOptions);
  }


  /**
   * 
   * @param jobId 
   */
  deleteProduct(companyId : string) {
    // return this.delete(this.getUrlById(jobId));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.delete(this.BASE_URL + companyId, {
      ...httpOptions,
      withCredentials : true
    })

  }
}

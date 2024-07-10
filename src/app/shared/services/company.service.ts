import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// const BASE_URL = 'https://workport-api.herokuapp.com/api/v1';


// app.use("/api/v1/users/", userRoutes);
// app.use("/api/v1/products/", productsRouter);
// app.use("/api/v1/categories/", categoriesRouter);
// app.use("/api/v1/brands/", brandsRouter);
// app.use("/api/v1/colors/", colorRouter);
// app.use("/api/v1/reviews/", reviewRouter);
// app.use("/api/v1/orders/", orderRouter);
// app.use("/api/v1/coupons/", couponsRouter);


@Injectable({
  providedIn: 'root',
})


export class CompanyService {
  private BASE_URL = `${environment.BASE_URL}/companies`; 
 
  constructor(private httpClient: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getAllCompanyListing() {
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
  findCompanyById(companyId : string) {
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
   */
  createCompany(companyData : any) {
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
  updateCompany(companyId : string , companyData : any) {
    
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
  deleteCompany(companyId : string) {
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

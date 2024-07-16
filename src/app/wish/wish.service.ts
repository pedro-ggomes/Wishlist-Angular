import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class WishService {

	constructor(private http:HttpClient) { }

	private getStandardOptions():any{
		return {
			headers : new HttpHeaders({
				'Content-type':'application/json'
			})
		}
	}

	getWishes(){
		let options = this.getStandardOptions();
			// makes the url look like this http://localhost:4200/assets/wishes.json?format=json
			options.params = new HttpParams({
				fromObject:{
					format:'json'
				}
			}) 
		return this.http.get('assets/wishes.json',options).pipe(catchError(this.handleError));
	}

	private handleError(error:HttpErrorResponse){
			if (error.status === 0){
				console.log('There is an issue with the client network: ', error.error);
			} else {
				console.error('Server-side error ', error.error);
			}
			return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
		}

	addWish(wish:WishItem){
		let options = this.getStandardOptions();
		options.headers = options.headers.set('Authorization','value-needed-for-auth');
		this.http.post('assets/wishes.json',wish,options);
	}


}

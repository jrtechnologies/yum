/**
 * Yum Food Orders
 * **Yum application, order food daily from the best chef in town**  This API is used by the angular.io client, and is not meant to be used otherwise.  Find source code of this API [here](http://gitlab/)  Copyright (C) 2017 JR Technologies.     ------------------------------------       Last edit: 21/04/2017 15:00   -------------------------------------
 *
 * OpenAPI spec version: 1.0.7
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class AdminApi {
    protected basePath = 'http://localhost:8082/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Update user's balance
     * @param id
     * @param amount
     */
    public balanceIdPut(id: number, deposit: models.Deposit, extraHttpRequestParams?: any): Observable<number> {
        return this.balanceIdPutWithHttpInfo(id, deposit, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     *
     * get global settings
     */
    public globalsettingsGet(extraHttpRequestParams?: any): Observable<models.GlobalSettings> {
        return this.globalsettingsGetWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * set global settings
     * @param settings The global settings to be updated
     */
    public globalsettingsPut(settings: models.GlobalSettings, extraHttpRequestParams?: any): Observable<{}> {
        return this.globalsettingsPutWithHttpInfo(settings, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return response;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get users
     *
     * @param page Request pagination page
     * @param size Request pagination size / num of users
     * @param orderBy Request orderBy filter
     * @param orderDirection Request orderBy filter
     */
    public usersGet(page?: string, size?: string, orderBy?: string, orderDirection?: string, extraHttpRequestParams?: any): Observable<models.UsersPage> {
        return this.usersGetWithHttpInfo(page, size, orderBy, orderDirection, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * Change approve status of user
     * @param id
     * @param approve Approve or disapprove
     * @param force Force disapprove user
     */
    public usersIdApprovePut(id: number, approve: boolean, force?: boolean, extraHttpRequestParams?: any): Observable<{}> {
        return this.usersIdApprovePutWithHttpInfo(id, approve, force, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Deletes an existing user
     *
     * @param id
     * @param force
     */
    public usersIdDelete(id: number, force?: boolean, extraHttpRequestParams?: any): Observable<{}> {
        return this.usersIdDeleteWithHttpInfo(id, force, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * initiate pass reset
     * @param id
     */
    public usersIdForgotpwdPost(id: number, extraHttpRequestParams?: any): Observable<models.Message> {
        return this.usersIdForgotpwdPostWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get user by id
     *
     * @param id
     */
    public usersIdGet(id: number, extraHttpRequestParams?: any): Observable<models.User> {
        return this.usersIdGetWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
    * deletes profile picture.
    *
    * @param id user id
    */
    public usersIdPictureDelete(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.usersIdPictureDeleteWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Uploads a file.
     *
     * @param id user id
     * @param file The file to upload
     */
    public usersIdPicturePost(id: number, file?: any, extraHttpRequestParams?: any): Observable<{}> {
        return this.usersIdPicturePostWithHttpInfo(id, file, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * Get profile picture.
     * @param token auth token
     * @param id user id
     */
    public usersIdPictureTokenGet(token: string, id: number, extraHttpRequestParams?: any): Observable<any> {
        return this.usersIdPictureTokenGetWithHttpInfo(token, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Updates an existing user
     * Admin can update user data EXCEPT password. Can only initiate a pass reset.
     * @param id
     * @param user The user data to be updated
     */
    public usersIdPut(id: number, user: models.UserSettings, extraHttpRequestParams?: any): Observable<models.LastEdit> {
        return this.usersIdPutWithHttpInfo(id, user, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * creates a new user
     * @param user The user to save
     */
    public usersPost(user?: models.UserReg, extraHttpRequestParams?: any): Observable<{}> {
        return this.usersPostWithHttpInfo(user, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     *
     * Update user&#39;s balance
     * @param id
     * @param amount
     */
    public balanceIdPutWithHttpInfo(id: number, deposit: models.Deposit, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/balance/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling balanceIdPut.');
        }
        // verify required parameter 'deposit' is not null or undefined
        if (deposit === null || deposit === undefined) {
            throw new Error('Required parameter deposit was null or undefined when calling balanceIdPut.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: deposit == null ? '' : JSON.stringify(deposit), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }


    /**
     *
     * get global settings
     */
    public globalsettingsGetWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/globalsettings`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     *
     * set global settings
     * @param settings The global settings to be updated
     */
    public globalsettingsPutWithHttpInfo(settings: models.GlobalSettings, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/globalsettings`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'settings' is not null or undefined
        if (settings === null || settings === undefined) {
            throw new Error('Required parameter settings was null or undefined when calling globalsettingsPut.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: settings == null ? '' : JSON.stringify(settings), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get users
     *
     * @param page Request pagination page
     * @param size Request pagination size / num of users
     * @param orderBy Request orderBy filter
     * @param orderDirection Request orderBy filter
     */
    public usersGetWithHttpInfo(page?: string, size?: string, orderBy?: string, orderDirection?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {

            queryParameters.set('page', <any>page);

        }

        if (size !== undefined) {

            queryParameters.set('size', <any>size);

        }

        if (orderBy !== undefined) {

            queryParameters.set('orderBy', <any>orderBy);

        }

        if (orderDirection !== undefined) {

            queryParameters.set('orderDirection', <any>orderDirection);

        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     *
     * Change approve status of user
     * @param id
     * @param approve Approve or disapprove
     * @param force Force disapprove user
     */
    public usersIdApprovePutWithHttpInfo(id: number, approve: boolean, force?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}/approve`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdApprovePut.');
        }
        // verify required parameter 'approve' is not null or undefined
        if (approve === null || approve === undefined) {
            throw new Error('Required parameter approve was null or undefined when calling usersIdApprovePut.');
        }
        if (approve !== undefined) {

            queryParameters.set('approve', <any>approve);

        }

        if (force !== undefined) {

            queryParameters.set('force', <any>force);

        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletes an existing user
     *
     * @param id
     */
    public usersIdDeleteWithHttpInfo(id: number, force?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdDelete.');
        }
        if (force !== undefined) {
            queryParameters.set('force', <any>force);
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     *
     * initiate pass reset
     * @param id
     */
    public usersIdForgotpwdPostWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}/forgotpwd`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdForgotpwdPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get user by id
     *
     * @param id
     */
    public usersIdGetWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdGet.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
         * deletes profile picture.
         *
         * @param id user id
         */
    public usersIdPictureDeleteWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}/picture`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPictureDelete.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Uploads a file.
     *
     * @param id user id
     * @param file The file to upload
     */
    public usersIdPicturePostWithHttpInfo(id: number, file?: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}/picture`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        let formParams = new URLSearchParams();

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPicturePost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/x-www-form-urlencoded');

        if (file !== undefined) {
            formParams.set('file', <any>file);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: formParams.toString(),
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     *
     * Get profile picture.
     * @param token auth token
     * @param id user id
     */
    public usersIdPictureTokenGetWithHttpInfo(token: string, id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}/picture/token`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling usersIdPictureTokenGet.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPictureTokenGet.');
        }
        if (token !== undefined) {
            queryParameters.set('token', <any>token);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'image/jpeg'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Updates an existing user
     * Admin can update user data EXCEPT password. Can only initiate a pass reset.
     * @param id
     * @param user The user data to be updated
     */
    public usersIdPutWithHttpInfo(id: number, user: models.UserSettings, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling usersIdPut.');
        }
        // verify required parameter 'user' is not null or undefined
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling usersIdPut.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: user == null ? '' : JSON.stringify(user), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     *
     * creates a new user
     * @param user The user to save
     */
    public usersPostWithHttpInfo(user?: models.UserReg, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: user == null ? '' : JSON.stringify(user), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * get holidays by year
     * @param year 
     */
    public globalsettingsHolidaysYearGet(year: number, extraHttpRequestParams?: any): Observable<Date[]> {
        return this.globalsettingsHolidaysYearGetWithHttpInfo(year, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * set holidays by year
     * @param year 
     * @param holidays The holidays to set
     */
    public globalsettingsHolidaysYearPost(year: number, holidays: string[], extraHttpRequestParams?: any): Observable<{}> {
        return this.globalsettingsHolidaysYearPostWithHttpInfo(year, holidays, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * 
     * get holidays by year
     * @param year 
     */
    public globalsettingsHolidaysYearGetWithHttpInfo(year: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/globalsettings/holidays/${year}'
            .replace('${' + 'year' + '}', String(year));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'year' is not null or undefined
        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling globalsettingsHolidaysYearGet.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * set holidays by year
     * @param year 
     * @param holidays The holidays to set
     */
    public globalsettingsHolidaysYearPostWithHttpInfo(year: number, holidays: string[], extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/globalsettings/holidays/${year}'
            .replace('${' + 'year' + '}', String(year));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'year' is not null or undefined
        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling globalsettingsHolidaysYearPost.');
        }
        // verify required parameter 'holidays' is not null or undefined
        if (holidays === null || holidays === undefined) {
            throw new Error('Required parameter holidays was null or undefined when calling globalsettingsHolidaysYearPost.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: holidays == null ? '' : JSON.stringify(holidays), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}

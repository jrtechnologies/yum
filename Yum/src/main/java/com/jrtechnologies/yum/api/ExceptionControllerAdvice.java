/*
 * Copyright (C) 2017 JR Technologies.
 * This file is part of Yum.
 * 
 * Yum is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * 
 * Yum is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with Yum. 
 * If not, see <http://www.gnu.org/licenses/>.
 */

package com.jrtechnologies.yum.api;

import java.util.logging.Level;
import java.util.logging.Logger;
import java.io.StringWriter;
import java.io.PrintWriter;
import com.jrtechnologies.yum.api.model.Error;
import static com.jrtechnologies.yum.service.FoodsService.getLineNumber;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
/*
* That class is responsible for handling all exceptions happening before or during the handling of an API call.
    

*/
@ControllerAdvice
public class ExceptionControllerAdvice extends ResponseEntityExceptionHandler{

    // The Exception MethodArgumentTypeMismatchException happens before we get access to a controller, 
    // during the convertion of a string from a path parameter into a long or int.
    // For example /foods/{id}. Param {id} is supposed to be a long and if we give a String
    // the code will break before we are called inside the controller.
    // In that case we have to prevent the error to bubble up to the default Exception Handler of Spring. This is the way to handle it
    // That default handler displays way too much information to the API end user.
    
    private static final Logger LOGGER = Logger.getLogger( ExceptionControllerAdvice.class.getName() );
    
    @ExceptionHandler(value = { MethodArgumentTypeMismatchException.class })
    protected ResponseEntity<Object> handleBadRequest(RuntimeException ex) {
        LOGGER.log(Level.WARNING, "RuntimeException"+" @line:"+getLineNumber(),""); 
        return handleApiException(new ApiException(400,"Invalid parameter in URL"));
    }

    @ExceptionHandler(value = { ConcurrentModificationException.class })
    protected ResponseEntity<Object> handleConcurrentModificationException(ConcurrentModificationException ex) {     
        LOGGER.log(Level.WARNING, "ConcurrentModificationException"+" @line:"+getLineNumber(),""); 
        return new ResponseEntity<>(ex.getResponseDTO(),HttpStatus.valueOf(ex.getCode()));
    }
    
    @ExceptionHandler(value = { ConcurrentCreationException.class })
    protected ResponseEntity<Object> handleConcurrentCreationException(ConcurrentCreationException ex) {     
        LOGGER.log(Level.WARNING, "ConcurrentCreationException"+" @line:"+getLineNumber(),""); 
        return new ResponseEntity<>(ex.getResponseDTO(),HttpStatus.valueOf(ex.getCode()));
    }
    
    @ExceptionHandler(value = { ConcurrentDeletionException.class })
    protected ResponseEntity<Object> handleConcurrentDeletionException(ConcurrentDeletionException ex) {     
        LOGGER.log(Level.WARNING, "ConcurrentDeletionException"+" @line:"+getLineNumber(),""); 
        return new ResponseEntity<>(ex.getResponseDTO(),HttpStatus.valueOf(ex.getCode()));
    }
    
    @ExceptionHandler(value = { ApiException.class })
    protected ResponseEntity<Object> handleApiException(ApiException ex) {
        LOGGER.log(Level.WARNING, "ApiException"+" @line:"+getLineNumber(),""); 
        Error e = new Error();
        e.setError(""+ex.getCode());
        e.setMessage(ex.getMessage());
        return new ResponseEntity<>(e,HttpStatus.valueOf(ex.getCode()));
    }

    @ExceptionHandler(value = { Exception.class })
    protected ResponseEntity<Object> handleException(Exception ex) {

        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw)); 

        LOGGER.log(Level.WARNING, "500 Exception" + "\n" + sw.toString(),""); 
        ex.printStackTrace();
        Error e = new Error();
        e.setError("500");
        e.setMessage("Internal Server Error");
        return new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return handleApiException(new ApiException(400, "Bad Request"));
    }

    @ExceptionHandler(value = {AccessDeniedException.class})
    protected ResponseEntity<Object> handleAccessDeniedException(AccessDeniedException ex) {
        Error e = new Error();
        e.setError("403");
        e.setMessage("Access Denied");
        return new ResponseEntity<>(e, HttpStatus.FORBIDDEN);
    }
}


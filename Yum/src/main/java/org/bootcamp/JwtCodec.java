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
 
package org.bootcamp;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import java.util.ArrayList;
import java.util.Date;

public class JwtCodec {

    private static String key = "dArg!@SFst3t32(35&t%v4[124v45@#2fhjpIy";

    public static String encode(String subject, ArrayList<String> roles ) {
        Date dt = new Date();
        dt.setTime((new Date()).getTime() + 10000);
        return Jwts.builder().setSubject(subject).claim("roles", roles).setExpiration(dt).setIssuedAt(new Date())
        .signWith(SignatureAlgorithm.HS256, key).compact();
    }

    public static Claims decode(String token) throws SignatureException {
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
    }
}
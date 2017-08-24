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
import java.util.Calendar;
import java.util.Date;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JwtCodec {

    private static ApplicationProperties applicationProperties;

    @Autowired
    public JwtCodec(ApplicationProperties applicationProperties) {
        JwtCodec.applicationProperties = applicationProperties;
    }

    private static String key = "dArg!@SFst3t32(35&t%v4[124v45@#2fhjpIy";

    public static String encode(String subject, ArrayList<String> roles) {
        // prepare expiration date according to application properties
        Date expDate = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(expDate);

        int unit;
        switch (applicationProperties.getTokenExpiration().getUnit()) {
            case "SECOND":
                unit = Calendar.SECOND;
                break;
            case "MINUTE":
                unit = Calendar.MINUTE;
                break;
            default:
                unit = Calendar.HOUR;
        }

        calendar.add(unit, applicationProperties.getTokenExpiration().getValue());
        expDate = calendar.getTime();

        return Jwts.builder().setSubject(subject).claim("roles", roles).setIssuedAt(new Date()).setExpiration(expDate)
                .signWith(SignatureAlgorithm.HS256, key).compact();
    }

    public static Claims decode(String token) throws SignatureException {
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
    }
}

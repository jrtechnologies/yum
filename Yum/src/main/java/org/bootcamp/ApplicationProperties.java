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

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Configuration
@PropertySource("classpath:application.properties")
@ConfigurationProperties(prefix = "yum")
public class ApplicationProperties {

    public static class Mail {

        private String from;
        private String domain;

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }

        public String getDomain() {
            return domain;
        }
        
        public void setDomain(String domain) {
            this.domain = domain;
        }
    }

    public static class Ldap {
        private boolean enabled;    
        private String base;
        private String url;
        private String domain;
        private String idAttribute;
        private String principalAttribute;

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public String getBase() {
            return base;
        }

        public void setBase(String base) {
            this.base = base;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getDomain() {
            return domain;
        }

        public void setDomain(String domain) {
            this.domain = domain;
        }
        
        public String getIdAttribute() {
            return idAttribute;
        }

        public void setIdAttribute(String idAttribute) {
            this.idAttribute = idAttribute;
        }

        public String getPrincipalAttribute() {
            return principalAttribute;
        }

        public void setPrincipalAttribute(String principalAttribute) {
            this.principalAttribute = principalAttribute;
        }
    }
    
    private Mail mail;
    private Ldap ldap;

    public Mail getMail() {
        return mail;
    }

    public void setMail(Mail mail) {
        this.mail = mail;
    }    

    public Ldap getLdap() {
        return ldap;
    }

    public void setLdap(Ldap ldap) {
        this.ldap = ldap;
    }
        
}

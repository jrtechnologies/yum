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

package com.jrtechnologies.test;

import com.jrtechnologies.test.annotation.WithMockAuth;
import org.junit.rules.TestRule;
import org.junit.runner.Description;
import org.junit.runners.model.Statement;

public class MockAuthRule implements TestRule {

    public Statement apply( Statement base, Description description ) {
        WithMockAuth annotation = description.getAnnotation( WithMockAuth.class );
        if (annotation != null) {
            String value = annotation.id();
            return new MockAuthStatement( base, Long.parseLong(value) );
        }
        return base;
    }
}
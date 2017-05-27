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

package org.bootcamp.test;

import org.bootcamp.AuthenticationToken;
import org.junit.runners.model.Statement;
import org.springframework.security.core.context.SecurityContextHolder;

public class MockAuthStatement extends Statement {

    private final Statement base;
    private final long id;

    public MockAuthStatement(Statement base, long id) {
        this.base = base;
        this.id = id;
    }

    @Override
    public void evaluate() throws Throwable {
        AuthenticationToken at = new AuthenticationToken(id,null,null);
        at.setAuthenticated(true);
        SecurityContextHolder.getContext().setAuthentication(at);
        try {
            base.evaluate();
        } finally {
            SecurityContextHolder.getContext().setAuthentication(null);
        }
    }
}

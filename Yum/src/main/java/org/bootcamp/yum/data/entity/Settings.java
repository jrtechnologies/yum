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
package org.bootcamp.yum.data.entity;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;
import org.bootcamp.yum.data.converter.LocalDateTimeAttributeConverter;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;

/**
 *
 *
 */
@Entity
@Table(name = "yum_settings")
public class Settings {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "deadline")
    private LocalTime deadline;

    @Column(name = "deadline_days")
    private int deadlineDays;

    @Column(name = "last_edit", updatable = false, insertable = false)
    @Convert(converter = LocalDateTimeAttributeConverter.class)
    private DateTime lastEdit;

    @Column(name = "currency")
    private String currency;

    @Column(name = "notes")
    private String notes;

    @Column(name = "tos")
    private String tos;

    @Column(name = "policy")
    private String policy;

    @Version
    @Column(name = "version")
    private int version;

    @Column(name = "foods_version")
    private int foods_version;

    @Column(name = "report_email")
    private String reportEmail;

    public Settings(int id, LocalTime deadline, DateTime lastEdit, String currency, String notes, String tos, String policy, int version, int foods_version) {
        this.id = id;
        this.deadline = deadline;
        this.lastEdit = lastEdit;
        this.currency = currency;
        this.notes = notes;
        this.tos = tos;
        this.policy = policy;
        this.version = version;
        this.foods_version = foods_version;
    }

    public Settings(int id) {
        this.id = id;
    }

    public Settings() {
    }

    public LocalTime getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalTime deadline) {
        this.deadline = deadline;
    }

    public int getDeadlineDays() {
        return deadlineDays;
    }

    public void setDeadlineDays(int deadlineDays) {
        this.deadlineDays = deadlineDays;
    }

    public DateTime getLastEdit() {
        return lastEdit;
    }

    public void setLastEdit(DateTime lastEdit) {
        this.lastEdit = lastEdit;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getTos() {
        return tos;
    }

    public void setTos(String tos) {
        this.tos = tos;
    }

    public String getPolicy() {
        return policy;
    }

    public void setPolicy(String policy) {
        this.policy = policy;
    }

    public int getId() {
        return id;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public int getFoods_version() {
        return foods_version;
    }

    public void setFoods_version(int foods_version) {
        this.foods_version = foods_version;
    }

    public String getReportEmail() {
        return reportEmail;
    }

    public void setReportEmail(String reportEmail) {
        this.reportEmail = reportEmail;
    }

    @Override
    public String toString() {
        return "Settings{" + "id=" + id + ", deadline=" + deadline + ", deadline_days=" + deadlineDays + ", lastEdit=" + lastEdit + ", currency=" + currency + ", notes=" + notes + ", tos=" + tos + ", policy=" + policy + ", version=" + version + ", foods_version=" + foods_version + ", report_email=" + reportEmail + '}';
    }

    public boolean deadlinePassed(LocalDate date) {
        // Check if order deadline passed based on given date, deadlineDays and deadlineTime (deadline)
        return (date.minusDays(deadlineDays).toLocalDateTime(deadline).compareTo(LocalDateTime.now()) < 0);
    }

}

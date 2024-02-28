package com.hackathon.customexception;

public class EmptyFieldsException extends RuntimeException {
    public EmptyFieldsException(String message) {
        super(message);
    }
}

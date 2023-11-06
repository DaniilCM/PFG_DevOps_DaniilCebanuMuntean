package com.daniilcebanu.exception;

public class NotValidDiscountException extends RuntimeException {
  public NotValidDiscountException(String s) {
    super(s);
  }
}

package com.daniilcebanu.product.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "product")
public class Product {
  @Id
  private Integer id;
  private String name;
  private Category category;
  private double price;
  private String currency;
  private double discount;
  private String discountDescription;
  private List<String> imageUrl;
}

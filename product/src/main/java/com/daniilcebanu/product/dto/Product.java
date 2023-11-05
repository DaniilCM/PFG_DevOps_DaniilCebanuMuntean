package com.daniilcebanu.product.dto;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "product")
public class Product {
  @Id
  private String id;

  @NotNull(message = "Product name can't be null")
  private String name;

  @NotNull
  private Category category;

  @Min(0)
  private double price;

  private String currency;

  @Max(100)
  private double discount;

  @NotNull
  private String discountDescription;
  private List<String> imageUrl;
}

package com.daniilcebanu.product.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.daniilcebanu.product.ProductRepository;
import com.daniilcebanu.product.dto.Product;

@Service
public class ProductService {
  private ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public String addProduct(Product product) {
    productRepository.save(product);

    return "Product added successfully";
  }

  public List<Product> listAllProducts() {
    return productRepository.findAll();
  }

  public List<Product> productCategoryList(String category) {
    return productRepository.findByCategory(category);
  }

  public Product productById(Integer id) {
    return productRepository.findById(id).get();
  }

  public String updateProduct(Product product) {
    productRepository.save(product);

    return "Product updated successfully";
  }

  public String deleteProductById(Integer id) {
    productRepository.deleteById(id);

    return "Product deleted";
  }
}
